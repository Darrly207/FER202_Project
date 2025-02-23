import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
const JobFinderRegister = () => {
  const [active, setActive] = useState("job seeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const changeActive = () => {
    setActive(active === "job seeker" ? "company" : "job seeker");
  };

  const activeColor = (type) => {
    return active === type
      ? "px-4 py-2 bg-green-200 rounded-md border-2 border-gray-500 w-full hover:bg-green-500"
      : "px-4 py-2 bg-gray-200 rounded-md border-2 border-gray-500 w-full hover:bg-gray-500";
  };

  const register = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || passwordAgain === "") {
      Swal.fire({
        icon: "error",
        text: "Please fill all the fields",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else if (password !== passwordAgain) {
      Swal.fire({
        icon: "error",
        text: "Passwords do not match",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else if (password.length <= 3) {
      Swal.fire({
        icon: "error",
        text: "Passwords must be at least 4 characters",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "success",
        text: `Registered with email: ${email} and password: ${password}`,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
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
            <label className="block text-gray-700 mb-2">Email Address</label>
            <Input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div>
            <label className="block text-gray-700 mb-2">Password Again</label>
            <Input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
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
            By clicking 'Continue', you acknowledge that you have read and
            accept the{" "}
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
