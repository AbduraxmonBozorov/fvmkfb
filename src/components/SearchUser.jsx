import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { baseURL } from "../utils/config";

function UserSearch({ users, setClickedUserId }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 🔄 Qidiruvni kechiktirish

  // 🔎 Foydalanuvchini API orqali qidirish
  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFilteredUsers([]); // Agar input bo‘sh bo‘lsa, ro‘yxatni tozalash
      return;
    }
    fetch(`user/search?fullname=${debouncedSearchTerm}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFilteredUsers(data); // API natijalarini saqlash
      })
      .catch((error) => console.error("Qidiruvda xatolik:", error));
  }, [debouncedSearchTerm]);

  return (
    <div className="p-0 relative">
      <h2 className="text-lg mb-2 mt-5">🔎 Foydalanuvchini qo'shish</h2>
      <input
        type="text"
        placeholder="Ism yoki familiyani kiriting..."
        className="input input-bordered w-full mix-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🔽 Natijalarni chiqarish */}
      <div className="show-selected-users max-h-[300px] overflow-y-auto absolute z-10 w-full">
        {filteredUsers.length > 0 ? (
          <ul className="bg-white">
            {filteredUsers.map((user) => (
              <li
                onClick={() => {
                  setClickedUserId(user.user_id);
                }}
                className="w-full py-1 ps-2 hover:bg-gray-300 cursor-pointer"
                key={user.user_id}
              >
                {user.fullname}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserSearch;
