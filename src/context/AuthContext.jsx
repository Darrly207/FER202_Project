import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      console.log("storedUser", storedUser);
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
      const response = await fetch(
        "https://user-auth-api-nestjs.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data); // Log để kiểm tra dữ liệu trả về từ API đăng nhập

      if (response.ok && data.token) {
        // Đảm bảo token tồn tại
        try {
          const response2 = await fetch(
            "https://user-auth-api-nestjs.onrender.com/users/me",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`,
              },
            }
          );

          const data2 = await response2.json();
          console.log("User details response:", data2.data);

          if (response2.ok) {
            setUser(data2.data);
            localStorage.setItem("user", JSON.stringify(data2.data));
            return true;
          } else {
            console.error("Failed to fetch user details:", data2);
            return false;
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
          return false;
        }
      } else {
        console.error(
          "Login failed: Invalid credentials or no token received."
        );
        return false;
      }
    } catch (error) {
      console.error("Login request failed:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    Navigate("/LoginForm");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
