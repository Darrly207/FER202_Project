import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";

const JobFinderRegister = () => {
  const [active, setActive] = useState("job seeker");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeActive = () => {
    setActive(active === "job seeker" ? "company" : "job seeker");
  };

  const activeColor = (type) => {
    return active === type
      ? "px-4 py-2 bg-green-200 rounded-md border-2 border-gray-500 w-full hover:bg-green-500"
      : "px-4 py-2 bg-gray-200 rounded-md border-2 border-gray-500 w-full hover:bg-gray-500";
  };

  const register = async (e) => {
    e.preventDefault();
    if (!fullName || !username || !password) {
      Swal.fire({
        icon: "error",
        text: "Please fill all the fields",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    if (password.length < 4) {
      Swal.fire({
        icon: "error",
        text: "Password must be at least 4 characters",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://user-auth-api-nestjs.onrender.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            username,
            password,
          }),
        }
      );
      const data = await response.json();

      Swal.fire({
        icon: response.ok ? "success" : "error",
        text: response.ok
          ? `Register Successfully, ${data.message}`
          : `Register failed, ${data.message}`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: `${error} Please try again later.`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="flex flex-col mx-auto justify-center flex-1 sm:w-full">
      <div className="max-w-md mx-auto w-full">
        <div className="flex space-x-4 mb-8 w-full mx-auto">
          <Button className={activeColor("job seeker")} onClick={changeActive}>
            Job Seeker
          </Button>
          <Button className={activeColor("company")} onClick={changeActive}>
            Company
          </Button>
        </div>

        <h1 className="text-4xl font-semibold text-gray-700 mb-8">
          Get more opportunities
        </h1>

        <Button className="w-full py-3 px-4 border rounded-lg mb-8 flex items-center justify-center space-x-2 bg-slate-200 border-gray-400 hover:bg-gray-100">
          <FaGoogle size={24} color="red" />
          <span>Sign Up with Google</span>
        </Button>

        <div className="text-center text-gray-500 mb-4">
          Or sign up with email
        </div>

        <form className="space-y-2" onSubmit={register}>
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <Input
              type="text"
              value={fullName}
              placeholder="Enter full name"
              className="w-full px-4 py-2 border rounded-lg"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <Input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Register
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

export default JobFinderRegister;
