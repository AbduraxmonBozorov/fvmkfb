import React, { useState } from "react";
import { Search } from "lucide-react";
import circleUser from "../assets/images/circle-user-solid.svg";
import DropDown from "./DropDown";

function Header() {
  const [profile, setProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleProfile() {
    setProfile(!profile);
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="header w-full border shadow h-[80px] flex flex-row items-center justify-between px-5 box-border">
      {/* Search section */}
      <div className="relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Qidirish..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-[300px]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* User Profile section */}
      <div
        className="user flex flex-row items-center gap-4 cursor-pointer relative"
        onClick={handleProfile}
      >
        <div className="flex flex-col items-end justify-center">
          <p className="text-md font-semibold text-gray-800">Ism Familiyasi</p>
          <p className="text-sm text-gray-600">Lavozimi</p>
        </div>
        <div className="userImage w-12 h-12 border rounded-full overflow-hidden bg-gray-100">
          <img
            src={circleUser}
            className="w-full h-full object-cover"
            alt="User avatar"
          />
        </div>

        {profile && (
          <div className="userDropDown absolute top-full right-0 mt-2 w-48 z-50">
            <DropDown />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;