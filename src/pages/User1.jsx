import React, { useState, useEffect } from "react";
import userImage from "../assets/images/circle-user-regular.svg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { baseURL } from "../utils/config";

function User1() {
  const [user, setUser] = useState({});
  const [userPic, setUserPic] = useState("");

  const userId = useLocation().pathname.split("/user/")[1];

  useEffect(() => {
    if (userId) {
      fetch(`/api/user/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser({});
          setUser(data);
        })
        .catch((error) => console.error(error));
    }
  }, [userId]);

  useEffect(()=>{
    setUserPic(`${baseURL}uploads/userphotos/${user.picture}`)
  }, [user])

  const formatPhoneNumber = (phone) => {
    if (!phone) return "Telefon raqam mavjud emas"; // Undefined bo'lsa xatolik bermasligi uchun
    return phone.replace(
      /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
      "+$1 ($2) $3-$4-$5"
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Tug'ilgan sana mavjud emas"; // Xatolik oldini olish
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // "1990-01-01" formatida qaytaradi
  };

  // useEffect(() => {
  //   fetch(`/user/me/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then((response) => {
  //       {
  //         setUserData(response );
  //       }
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }, [userId]);

  const personalInfo = {
    fullName: "Kamolov Alisher Akmalovich",
    birthDate: "15.08.1984",
    address:
      "Farg'ona viloyati Farg'ona shahar Mustaqillik MFY Alisher Navoiy ko'chasi 15-uy",
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-100 p-3 md:p-3">
      <Link
        to="/"
        className="hover:text-sky-700 border rounded-lg bg-gray-200 px-2 py-3"
      >
        <FontAwesomeIcon className="text-black" icon={faArrowLeft} />
        <span className="ml-2 text-black">Qaytish</span>
      </Link>

      <div className="about-user mt-3">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-black">
            Umumiy ma'lumotlar
          </h1>
        </div>

        <div className="mt-6 bg-white rounded-lg p-6 shadow-sm flex justify-between">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-gray-600 text-1xl">F.I.SH</label>
              <div>
                <h2 className="font-medium text-1xl">
                  {user.fullname ? user.fullname.split(" ")[1] : "Ism"}
                </h2>
                <h2 className="font-medium text-1xl">
                  {user.fullname ? user.fullname.split(" ")[0] : "Familiya"}
                </h2>
              </div>
            </div>
            <div>
              <label className="text-gray-600 text-1xl">Tug'ilgan sana:</label>
              <div className="font-medium text-1xl">
                {formatDate(user?.birth_date)}
              </div>
            </div>
            <div>
              <label className="text-gray-600 text-1xl">Bo'lim:</label>
              <div className="font-medium text-1xl">{user?.department}</div>
            </div>
            <div>
              <label className="text-gray-600 text-1xl">Lavozim:</label>
              <div className="font-medium text-1xl">{user?.position}</div>
            </div>
            <div>
              <label className="text-gray-600 text-1xl">Manzili:</label>
              <div className="font-medium text-1xl">{personalInfo.address}</div>
            </div>
            <div>
              <label className="text-gray-600 text-1xl">Email:</label>
              <div className="font-medium text-1xl">{user.email}</div>
            </div>
            <div>
              <label className="text-gray-600 text-1xl">TelefonRaqam:</label>
              <div className="font-medium text-1xl">
                {formatPhoneNumber(user?.phone)}
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={userPic}
              className="border w-[200px] h-[240px] rounded-2xl object-cover"
              alt={"xatolik"}
            />
          </div>
        </div>
      </div>
      
       <div className="process grid grid-cols-4 gap-10 mt-5">
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

      {/* New Work History Table */}
      <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-black mt-5">
            Ish faoliyati
          </h2>
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border p-3 text-left">№</th>
              <th className="border p-3 pr-0 text-left">Ish boshlagan sana</th>
              <th className="border p-3 pr-0 text-left">Ish tugatgan sana</th>
              <th className="border p-3 text-left">Tashkilot</th>
              <th className="border p-3 text-left">STIR</th>
              <th className="border p-3 text-left">Lavozim</th>
              <th className="border p-3 text-left">Bo'lim</th>
            </tr>
          </thead>
          <tbody>
            {user.work_Experiences?.map((data, index) => {
              const years = data.job_year
                ? data.job_year.split("-")
                : ["Aniqlanmagan", "Hozirgacha"];

              return (
                <tr key={index}>
                  <td className="border p-3">{index + 1}</td>
                  <td className="border p-3">{years[0] || "Aniqlanmagan"}</td>
                  <td className="border p-3">{years[1] || "Hozirgacha"}</td>
                  <td className="border p-3">
                    {data.organization_name || "Company Name"}
                  </td>
                  <td className="border p-3">{data.stir || "123456789"}</td>
                  <td className="border p-3">
                    {data.position || "Aniqlanmagan"}
                  </td>
                  <td className="border p-3">
                    {data.departament || "Mavjud emas"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h2 className="text-2xl font-bold mb-4 text-black mt-5">Ta'lim faoliyati</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-3 text-left">№</th>
                <th className="border p-3 text-left">O'qish boshlangan sana</th>
                <th className="border p-3 text-left">O'qish tugagan sana</th>
                <th className="border p-3 text-left">Ta'lim muassasa nomi</th>
                <th className="border p-3 text-left">Malumot i</th>
                <th className="border p-3 text-left">mutaxassislik</th>
                <th className="border p-3 text-left">Talim ID</th>
              </tr>
            </thead>
            <tbody>
              {user.eduinfos?.map((data, index) => {
                const years = data.study_year
                  ? data.study_year.split("-")
                  : ["Aniqlanmagan", "Hozirgacha"];

                return (
                  <tr key={index}>
                    <td className="border p-3">{index + 1}</td>
                    <td className="border p-3">{years[0] || "Aniqlanmagan"}</td>
                    <td className="border p-3">{years[1] || "Hozirgacha"}</td>
                    <td className="border p-3">
                      {data.edu_name || "Company Name"}
                    </td>
                    <td className="border p-3">
                      {data.degree || "Aniqlanmagan"}
                    </td>
                    <td className="border p-3">
                      {data.specialty || "Aniqlanmagan"}
                    </td>
                    <td className="border p-3">
                      {data.edu_id || "Mavjud emas"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2 className="text-2xl font-bold mb-4 text-black mt-5">
            Oila azolari
          </h2>

          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border p-3 text-left">№</th>
                <th className="border p-3 text-left">Oila a'zosi</th>
                <th className="border p-3 text-left">F.I.Sh</th>
                <th className="border p-3 text-left"> Tug'ilgan sana</th>
                <th className="border p-3 text-left">Manzil</th>
                <th className="border p-3 text-left">Ish joyi</th>
                <th className="border p-3 text-left"> Ma'lumoti</th>
              </tr>
            </thead>
            <tbody>
              {user.family_members?.map((data, index) => {
                const formatDate = (dateString) => {
                  if (!dateString) return "Tug'ilgan sana mavjud emas"; // Xatolik oldini olish
                  const date = new Date(dateString);
                  return date.toISOString().split("T")[0]; // "1990-01-01" formatida qaytaradi
                };

                return (
                  <tr key={index}>
                    <td className="border p-3">{index + 1}</td>
                    <td className="border p-3">
                      {data.family_member || "Aniqlanmagan"}
                    </td>
                    <td className="border p-3">
                      {data.fullname || "aniqlanmagan"}
                    </td>
                    <td className="border p-3">
                      {formatDate(data.birth_data) || "aniqlanmagan"}
                    </td>
                    <td className="border p-3">
                      {data.address || "123456789"}
                    </td>
                    <td className="border p-3">
                      {data.job_address || "Aniqlanmagan"}
                    </td>
                    <td className="border p-3">
                      {data.grade || "Mavjud emas"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  );
}

export default User1;
