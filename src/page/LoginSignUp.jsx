import { useRef } from "react";
import img1 from "../assets/wh1.jpg";
import { Card } from "@/components/ui/card";
import img from "../assets/img.png";
import JobFinderLogin from "../components/Login";
import JobFinderRegister from "../components/Register";

function LoginSignUp() {
  const currentRouter = window.location.pathname;
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
      <div className="flex flex-col mx-auto justify-center flex-1 sm:w-full">
        {currentRouter === "/LoginForm" && <JobFinderLogin />}
        {currentRouter === "/SignupForm" && <JobFinderRegister />}
      </div>
    </div>
  );
}

export default LoginSignUp;
