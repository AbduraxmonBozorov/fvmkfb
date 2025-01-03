import React, { useState, useEffect } from "react";
import userImage from "../assets/images/circle-user-regular.svg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function User1() {
  const [user, setUser] = useState({});
  const userId = useLocation().pathname.split("/user/")[1];
  console.log(userId);
  useEffect(() => {
    if(userId){
      fetch(`/api/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser({})
        setUser(data);
      })
      .catch((error) => console.error(error));
    }
  }, [userId]);

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-100 p-3 md:p-10">
      <Link
        to="/"
        className="hover:text-sky-700 border rounded-lg bg-gray-200 px-2 py-3"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="ml-2">Qaytish</span>
      </Link>

      <div className="about-user mt-3">
        <div className="fish flex flex-row justify-between">
          <div>
            <h2 className="text-5xl font-medium">
              {user.fullname ? user.fullname.split(" ")[1] : "Ism"}
            </h2>
            <h2 className="text-5xl font-medium">
              {user.fullname ? user.fullname.split(" ")[0] : "Familiya"}
            </h2>
          </div>
          <div className="user-image w-32 h-32 border rounded-full">
            <img
              src={user.picture ? user.picture : userImage}
              className="w-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="about-work">
          <h2 className="text-2xl">
            Bo'lim:{" "}
            <span>{user.department ? user.department : "Mavjud emas"}</span>
          </h2>
          <h2 className="text-2xl">
            Lavozim:{" "}
            <span>{user.position ? user.position : "Aniqlanmagan"}</span>
          </h2>
        </div>
      </div>

      <div className="process  grid grid-cols-4 gap-10 mt-5">
        <div className="allProcess py-10 hover:shadow-lg relative text-center bg-cyan-700 text-white cursor-pointer">
          Barcha topshiriqlar
          <span className="absolute bottom-1 right-1 ">18</span>
        </div>
        <div className="completedProcess py-10 hover:shadow-lg relative text-center bg-green-700 text-white cursor-pointer">
          Bajarilgan topshiriqlar
          <span className="absolute bottom-1 right-1 ">10</span>
        </div>
        <div className="pandingProcess py-10 hover:shadow-lg relative text-center bg-yellow-700 text-white cursor-pointer">
          Kutilayotgan topshiriqlar
          <span className="absolute bottom-1 right-1 ">8</span>
        </div>
      </div>
    </div>
  );
}

export default User1;
