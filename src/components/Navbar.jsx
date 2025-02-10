import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import JobFinderPage from "../page/SearchPage";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <Router className="max-w-6xl mx-auto p-6 ml-12">
      <nav className="flex justify-between items-center mb-8 ml-12">
        <div className="flex items-center gap-4 ml-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            <span className="font-semibold text-3xl text-green-500">
              Job Finder
            </span>
          </Link>
          <div className="flex gap-4 ml-8 h-10 text-lg mt-2">
            <div className="text-green-600 h-full border-b-2 border-green-600">
              Find Jobs
            </div>
            <a href="#" className="text-gray-700">
              Browse Companies
            </a>
          </div>
        </div>
        <div className="flex gap-4 mr-12 h-full">
          <Button className="bg-white hover:bg-gray-200 border-r-2 border-green-600 h-full text-green-600 font-bold p-3 pr-11 flex flex-center">
            Login
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 h-full font-bold text-white p-3 pl-4 pr-4 flex justify-center items-center mr-12 ">
            Sign Up
          </Button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<JobFinderPage />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
