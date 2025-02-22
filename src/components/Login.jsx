import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import img1 from "../assets/wh1.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import img from "../assets/img.png";
const JobFinderLogin = () => {
  const [active, setActive] = useState("job seeker");

  const changeActive = () => {
    setActive(active === "job seeker" ? "company" : "job seeker");
  };

  const activeColor = (type) => {
    return active === type
      ? "px-4 py-2 bg-green-200 rounded-md border-2 border-gray-500 w-full hover:bg-green-500"
      : "px-4 py-2 bg-gray-200 rounded-md border-2 border-gray-500 w-full hover:bg-gray-500";
  };

  return (
    <div className="flex min-h-screen bg-green-100 ">
      {/* Left Section */}
      <div className="w-1/2 relative p-8 hidden sm:block">
        {/* Badge */}
        <Card className="bg-white p-4 rounded-lg inline-block mb-8 absolute top-10 left-10 z-10 shadow-lg">
          <div className="flex items-center">
            <div className="space-y-1">
              <div className="w-4 h-2 bg-green-500"></div>
              <div className="w-6 h-2 bg-green-500"></div>
              <div className="w-8 h-2 bg-green-500"></div>
            </div>
            <div className="ml-4 object-cover">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-gray-500 text-sm">People got hired</div>
            </div>
          </div>
        </Card>

        {/* Image */}
        <img
          src={img1}
          alt="job finder"
          className="absolute top-20 left-20 max-h-svh z-0"
        />

        {/* Testimonial */}
        <Card className="absolute bottom-32 right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 bg-green-500 rounded-full" src={img} />
            <div className="ml-4">
              <div className="font-medium">Adam Sandler</div>
              <div className="text-sm text-gray-500">
                Lead Engineer at Canva
              </div>
            </div>
          </div>
          <p className="text-gray-800 italic">
            "Great platform for the job seeker that searching for new career
            heights."
          </p>
        </Card>
      </div>

      {/* Right Section */}
      <div className="flex flex-col mx-auto justify-center flex-1 sm:w-full">
        <div className="max-w-md mx-auto w-full">
          <div className="flex space-x-4 mb-8 w-full mx-auto">
            <Button
              className={activeColor("job seeker")}
              onClick={changeActive}
            >
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

          <form className="space-y-7">
            <div>
              <label className="block text-gray-700 mb-2.5">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter email address"
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-lg"
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
    </div>
  );
};

export default JobFinderLogin;
