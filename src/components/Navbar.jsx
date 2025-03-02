import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JobFinderPage from "../page/SearchPage";
import JobDashboard from "../page/Dashboard";
import HomePage from "../page/HomePage";

import { useContext, useState } from "react";
import { Menu, X, User2Icon, LogOut } from "lucide-react";
import LoginSignUp from "../page/LoginSignUp";
import JobDetail from "../page/JobDetail";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;

  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    if (logout) {
      logout();
      setShowUserMenu(false);
    }
  };

  return (
    <Router>
      <nav className="w-full px-4 sm:px-12 py-4 flex justify-between items-center bg-white shadow-md relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/UserDashboard" className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full"></div>
              <span className="font-semibold text-lg sm:text-3xl text-green-500 ml-2">
                Job Finder
              </span>
            </Link>
          </div>

          {/* Menu trên Desktop */}
          <div className="hidden sm:flex gap-6 xxl:flex-start">
            <Link
              to="/JobFind"
              className="text-green-600 border-b-2 border-green-600"
            >
              Find Jobs
            </Link>
            <Link to="/" className="text-gray-700">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* User profile hoặc Login/Signup buttons trên Desktop */}
        <div className="hidden sm:flex gap-4 items-center">
          {user ? (
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User2Icon size={20} className="text-green-600" />
                <span className="font-medium">{user.fullName}</span>
              </div>

              {/* User dropdown menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    to="/UserDashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut size={16} className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/LoginForm"
                className="bg-gray-100 hover:bg-gray-200 border border-green-600 text-green-600 font-bold px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/SignupForm"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Icon mở Menu trên Mobile */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-md absolute top-16 left-0 w-full flex flex-col items-center p-4 space-y-4 z-50">
          <Link to="/JobFind" className="text-green-600">
            Find Jobs
          </Link>
          <Link to="/" className="text-gray-700">
            Browse Companies
          </Link>

          {/* User profile hoặc Login/Signup buttons trên Mobile */}
          {user ? (
            <>
              <div className="flex items-center justify-center gap-2 w-full bg-gray-100 p-4 rounded">
                <User2Icon size={20} className="text-green-600" />
                <span className="font-medium">{user.data.fullName}</span>
              </div>
              <Link
                to="/UserDashboard"
                className="text-gray-700 w-full text-center"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 bg-red-50 text-red-600 font-bold px-4 py-2 rounded w-full"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/LoginForm"
                className="bg-gray-100 hover:bg-gray-200 border border-green-600 text-green-600 font-bold px-4 py-2 rounded w-full text-center"
              >
                Login
              </Link>
              <Link
                to="/SignupForm"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded w-full text-center"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UserDashboard" element={<JobDashboard />} />
        <Route path="/JobFind" element={<JobFinderPage />} />
        <Route path="/LoginForm" element={<LoginSignUp />} />
        <Route path="/SignupForm" element={<LoginSignUp />} />
        <Route path="/JobDetail" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
