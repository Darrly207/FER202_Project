import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Danh sách người dùng giả lập
  const [mockUsers, setMockUsers] = useState([
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
    },
  ]);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const foundUser = mockUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        return true;
      } else {
        console.error("Invalid credentials");
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const register = async (fullName, username, password, role) => {
    try {
      // Kiểm tra xem tên người dùng đã tồn tại chưa
      const userExists = mockUsers.some((user) => user.username === username);
      if (userExists) {
        console.error("Username already exists");
        return { success: false, message: "Username already exists" };
      }

      // Tạo người dùng mới
      const newUser = {
        id: mockUsers.length + 1,
        fullName,
        username,
        password,
        role,
      };

      // Cập nhật danh sách người dùng
      setMockUsers((prevUsers) => [...prevUsers, newUser]);

      // Lưu thông tin người dùng vào localStorage
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      return { success: true, message: "Registration successful" };
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, message: "Registration failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
