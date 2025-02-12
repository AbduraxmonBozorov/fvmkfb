import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Home, Users, FileText, Settings, LogOut } from "lucide-react";

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

export default function Layout({ children, handleLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div className="flex h-screen bg-gray-100 relative">
      <motion.nav
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="w-64 bg-white shadow-lg absolute md:relative z-10"
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <ul className="space-y-2 p-4">
          <li>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
            >
              <Home size={20} />
              <span>Bosh sahifa</span>
            </Link>
          </li>
          <li>
            <Link
              to="/addUser"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
            >
              <Users size={20} />
              <span>Xodim qo'shish</span>
            </Link>
          </li>

          <li>
            <Link
              to="/tasks"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
            >
              <FileText size={20} />
              <span>Topshiriqlar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
            >
              <Settings size={20} />
              <span>Sozlamalar</span>
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-0 w-full p-4">
          <Link to="" onClick={handleLogout}>
            <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2 w-full">
              <LogOut size={20} />
              <span>Chiqish</span>
            </button>
          </Link>
        </div>
      </motion.nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user?.fullname}</span>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={user?.picture}
                alt="Admin"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
