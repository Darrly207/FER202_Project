import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const JobFinderLogin = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [active, setActive] = useState("job seeker");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleActive = () => {
    setActive(active === "job seeker" ? "company" : "job seeker");
  };

  const getButtonClass = (type) =>
    `px-4 py-2 rounded-md border-2 border-gray-500 w-full hover:bg-gray-500 ${
      active === type ? "bg-green-200 hover:bg-green-500" : "bg-gray-200"
    }`;

  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = formData;
    if (!username || !password) {
      return Swal.fire({
        icon: "error",
        text: "Please fill all the fields",
        timer: 3000,
        showConfirmButton: true,
      });
    }

    const loginSuccess = await login(username, password);
    if (loginSuccess) {
      navigate("/");
    }
  };

  const handleGoogleLogin = async () => {
    const response = await loginWithGoogle();
    if (response.success) {
      console.log("Google login successful:", response.message);
      navigate("/");
    } else {
      console.error("Google login failed:", response.message);
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center flex-1 sm:w-full">
      <div className="max-w-md mx-auto w-full">
        <div className="flex space-x-4 mb-8">
          <Button
            className={getButtonClass("job seeker")}
            onClick={toggleActive}
          >
            Job Seeker
          </Button>
          <Button className={getButtonClass("company")} onClick={toggleActive}>
            Company
          </Button>
        </div>

        <h1 className="text-4xl font-semibold text-gray-700 mb-8">
          Get more opportunities
        </h1>

        {/* Nút đăng nhập bằng Google */}
        <Button
          className="w-full py-3 border rounded-lg mb-8 flex items-center justify-center space-x-2 bg-slate-200 border-gray-400 hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
          <FaGoogle size={24} color="red" />
          <span>Sign Up with Google</span>
        </Button>

        <div className="text-center text-gray-500 mb-4">
          Or sign up with username
        </div>

        <form className="space-y-7" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 mb-2.5">User Name</label>
            <Input
              type="username"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              className="w-full px-4 py-2 border rounded-lg"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <Button className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Login
          </Button>

          <p className="text-sm text-gray-500">
            By clicking &apos;Continue&apos;, you acknowledge that you have read
            and accept the{" "}
            <a href="#" className="text-green-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-500">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default JobFinderLogin;
