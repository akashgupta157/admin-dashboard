import { useState } from "react";
import { useNavigate } from "react-router";

const Header = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://png.pngtree.com/png-clipart/20230703/original/pngtree-school-logo-design-template-vector-png-image_9248853.png"
          alt="School Logo"
          className="h-10 w-10 mr-3"
        />
        <h1 className="text-xl font-semibold text-gray-800">School Name</h1>
      </div>

      <div className="flex items-center space-x-4 relative">
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
          <span className="text-sm font-medium">Admin Dashboard</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <span>A</span>
            </div>
            <span className="hidden md:inline-block font-medium">Admin</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button
                onClick={handleProfileClick}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Your Profile
              </button>
              <button
                onClick={onLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
