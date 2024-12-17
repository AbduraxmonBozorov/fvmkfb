import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Users, FileText, Settings, LogOut } from 'lucide-react';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "-0%" },
};

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      <motion.nav
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={`bg-white shadow-lg absolute md:relative z-10 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"
          }`}
      >
        {isSidebarOpen && (
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
        )}
        {isSidebarOpen && (
          <ul className="space-y-2 p-4">
            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
              >
                <Home size={20} />
                <span className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"
                  }`}>Bosh sahifa</span>
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
              >
                <Users size={20} />
                <span className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"
                  }`}>Hodimlar</span>
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
              >
                <FileText size={20} />
                <span className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"
                  }`}>Hisobotlar</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tasks"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
              >
                <FileText size={20} />
                <span className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"
                  }`}>Vazifalar</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2"
              >
                <Settings size={20} />
                <span className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0"
                  }`}>Sozlamalar</span>
              </Link>
            </li>
          </ul>
        )}

        {isSidebarOpen && (
          <div className="absolute bottom-0 w-full p-4">
            <Link to="/login">
              <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-md p-2 w-full">
                <LogOut size={20} />
                <span>Chiqish</span>
              </button>
            </Link>
          </div>
        )}
      </motion.nav>

      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-0"
          }`}
      >
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
              <span className="text-gray-700">Admin</span>
              <img
                className="w-8 h-8 rounded-full"
                src="/placeholder.svg?height=32&width=32"
                alt="Admin"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div >
  );
}
