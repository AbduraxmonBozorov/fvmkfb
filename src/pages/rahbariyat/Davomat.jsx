import React, { useEffect, useState } from "react";
import SwitchExample from "../../components/SwitchExample";
import UserSearch from "../../components/SearchUser";

function Davomat() {
  const today = new Date().toISOString().split("T")[0]; // 📅 Bugungi sana
  const [selectDay, setSelectDay] = useState(today);
  const [selectedUsers, setSelectedUsers] = useState(
    localStorage.getItem("selectedUsers")
      ? JSON.parse(localStorage.getItem("selectedUsers"))
      : []
  );
  const [allUsers, setAllUsers] = useState([]);
  const [clickedUserId, setClickedUserId] = useState(null);
  const [attendance, setAttendance] = useState({}); // ✅ Davomat holati

  // ✅ Foydalanuvchini tanlaganda ro'yxatga qo'shish
  useEffect(() => {
    if (!clickedUserId) return;

    fetch(`/user/${clickedUserId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setSelectedUsers((prevUsers) => {
          if (prevUsers.some((user) => user.user_id === data.user_id)) {
            alert("Bu foydalanuvchi ro'yhatda mavjud!");
            return prevUsers;
          }
          return [...prevUsers, data];
        });
        localStorage.setItem("selectedUsers", JSON.stringify(selectedUsers));
      })
      .catch((error) => console.error("Xatolik:", error));
  }, [clickedUserId]);

  // ✅ Barcha foydalanuvchilarni olish
  useEffect(() => {
    fetch(`/user`)
      .then((response) => response.json())
      .then((data) => setAllUsers(data.users))
      .catch((error) => console.error(error));
  }, []);

  // 📅 Sana tanlash
  const changeDate = (e) => setSelectDay(e.target.value);

  // 🔄 Davomat holatini o'zgartirish
  const handleSwitchChange = (userId) => {
    setAttendance((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  // 💾 Saqlash tugmasi bosilganda
  const handleSave = () => {
    const attendanceData = selectedUsers.map((user) => ({
      id: user.user_id,
      name: user.fullname,
      date: selectDay,
      status: attendance[user.user_id] ? "Kelgan" : "Kelmagan",
    }));

    console.log("📊 Davomat ma'lumotlari:", attendanceData);

    // 🔄 Formani tozalash
    setAttendance({});
    setSelectDay(today);
  };

  const removeUser = (id, fullname) => {
    let req = confirm(`Haqiqatdan ham ${fullname} ni o'chirmoqchimisiz?`);
    if (req == true) {
      let filteredUsers = selectedUsers.filter((user) => {
        return user.user_id != id;
      });
      setSelectedUsers(filteredUsers); // 💡 selectedUsers ni yangilash kerak
      localStorage.setItem("selectedUsers", JSON.stringify(filteredUsers)); // 🔄 LocalStorage ni ham yangilash
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">📅 Davomat</h1>

      <div className="flex flex-row justify-between border md:px-8">
        <div>
          <h2 className="mt-5 text-lg">🗓️ Kerakli sanani tanlang</h2>
          <input
            onChange={changeDate}
            className="input input-bordered w-full max-w-xs mt-2"
            type="date"
            value={selectDay}
          />
        </div>
        <UserSearch users={allUsers} setClickedUserId={setClickedUserId} />
      </div>

      <table className="table mt-5 table-zebra w-full">
        <thead>
          <tr className="text-lg bg-gray-100">
            <th>№</th>
            <th>Ism familiyasi</th>
            <th>Holati</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedUsers?.map((user, index) => (
            <tr key={user.user_id} className="text-lg">
              <td>{index + 1}</td>
              <td>{user.fullname}</td>
              <td>
                <SwitchExample
                  checked={attendance[user.user_id] || false}
                  onChange={() => handleSwitchChange(user.user_id)}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    removeUser(user.user_id, user.fullname);
                  }}
                  className="btn bg-red-500 text-white"
                >
                  O'chirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button
          className="btn btn-primary w-full max-w-xs"
          onClick={handleSave}
        >
          💾 Saqlash
        </button>
      </div>
    </div>
  );
}

export default Davomat;
