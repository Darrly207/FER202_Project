import { createContext, useState, useEffect, useContext } from "react";
import { auth, googleProvider } from "../lib/firebaseConfig";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "../lib/firebaseConfig"; // Import Firestore instance
import { CompanyContext } from "./CompanyContext"; // Import addCompany function
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addCompany } = useContext(CompanyContext);
  // Danh sách người dùng giả lập
  const mockUsers = [
    {
      id: 1,
      username: "seeker123",
      password: "123456",
      role: "seeker",
      fullName: "Darrly Ng",
    },
    {
      id: 2,
      username: "companyAccount1",
      password: "123456",
      role: "company",
      fullName: "Darrly Com",
      companyID: "1",
    },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userData = {
          id: currentUser.uid,
          email: currentUser.email || "unknown@example.com",
          fullName: currentUser.displayName || "Unknown User",
          role: "seeker", // Mặc định là 'seeker'
          img: currentUser.photoURL || "https://via.placeholder.com/150",
        };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Đăng nhập bằng tài khoản giả lập
  const login = async (username, password) => {
    try {
      const foundUser = mockUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        return { success: true, message: "Login successful" };
      } else {
        return { success: false, message: "Invalid credentials" };
      }
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: "An unexpected error occurred" };
    }
  };

  // Đăng ký tài khoản giả lập
  const register = async (fullName, username, password, role) => {
    try {
      const userExists = mockUsers.some((user) => user.username === username);
      if (userExists) {
        return { success: false, message: "Username already exists" };
      }

      const newUser = {
        id: mockUsers.length + 1,
        fullName,
        username,
        password,
        role,
      };

      // Cập nhật danh sách người dùng
      mockUsers.push(newUser);

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      if (role === "company") {
        const defaultCompany = {
          userID: newUser.id,
          name: "New Company",
          logoSrc: "https://via.placeholder.com/150?text=Company+Logo",
          description: "No description available",
          location: "Unknown location",
          contactInfo: {
            address: "Not provided",
            phone: "Not provided",
            email: "Not provided",
            website: "#",
          },
          aboutUs: "About information not available.",
          visionMission: "Vision & mission not available.",
          services: ["Service information not available."],
          teamMembers: [],
          achievements: ["No achievements listed."],
          benefits: ["No benefits listed."],
          partnerships: [],
          testimonials: [],
        };

        addCompany(defaultCompany); // Gọi addCompany từ CompanyContext
      }

      return { success: true, message: "Registration successful" };
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, message: "An unexpected error occurred" };
    }
  };

  // Đăng xuất
  const logout = async () => {
    try {
      // Đăng xuất khỏi Firebase Authentication
      await signOut(auth);

      // Reset trạng thái user và xóa dữ liệu từ localStorage
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("users");

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Đăng nhập bằng Google
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      console.log("Google User:", googleUser); // Debug giá trị của googleUser

      if (!googleUser || !googleUser.uid) {
        console.error("Google user or UID is missing:", googleUser);
        return { success: false, message: "Failed to retrieve user data" };
      }

      const userData = {
        id: googleUser.uid,
        email: googleUser.email || "unknown@example.com",
        fullName: googleUser.displayName || "Google User",
        role: "seeker", // Mặc định là 'seeker'
        img: googleUser.photoURL || "https://via.placeholder.com/150",
      };

      // Lưu thông tin người dùng vào Firestore
      const userRef = doc(db, "users", googleUser.uid);
      await setDoc(userRef, userData, { merge: true });

      // Cập nhật trạng thái người dùng
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return { success: true, message: "Logged in with Google successfully" };
    } catch (error) {
      console.error("Google login failed:", error);
      return { success: false, message: "Google login failed" };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loginWithGoogle, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
