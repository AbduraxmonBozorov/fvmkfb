
import React, { useState } from "react";
import { useEffect } from "react";
import { baseURL } from "../utils/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Settings() {
  const [user, setUser] = useState({});
  const [userPic, setUserPic] = useState("");
  const [isitOpen, setisitOpen] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    surname: "",
    job: "",
    address: "",
  });

  const [education, setEducation] = useState({
    edu_name: "",
    study_year:"",
    degree: "",
    specialty: "",
  });




  const [familyMembers, setFamilyMembers] = useState([
    {
      relation: "",
      name: "",
      dob: "",
      address: "",
      workplace: "",
      education: "",
    },
  ]);
  


  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][field] = value;
    setFamilyMembers(updatedMembers);
  };

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        relation: "",
        name: "",
        dob: "",
        address: "",
        workplace: "",
        education: "",
      },
    ]);
  };

  const removeFamilyMember = (index) => {
    setFamilyMembers(familyMembers.filter((_, i) => i !== index));
  };

  const savePersonalInfo = () => console.log("Personal Info:", personalInfo);
  const saveEducation = () => console.log("Education Info:", education);
  const saveFamily = () => console.log("Family Members:", familyMembers);

  // fetch("/user/me/profile", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("token")}`, // Agar token kerak bo'lsa
  //   },
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((data) => setUser(data))
  //   .catch((error) => console.error("Error:", error));

  // useEffect(() => {
  //   setUserPic(`${baseURL}uploads/userphotos/${user.picture}`);
  // }, [user]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

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

  return (
    <div>
      {isitOpen ? (
        <div className="w-full h-full overflow-y-auto bg-slate-100 p-3 md:p-3">
          <div className="about-user mt-3">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-black">
                  Umumiy ma'lumotlar
                </h1>
                <div>
                  <button
                    className="btn text-white bg-red-500 border-0 float-end"
                    type="button"
                    onClick={() => setisitOpen(false)}
                  >
                    O'zgartirish
                  </button>
                </div>
              </div>
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
                  <label className="text-gray-600 text-1xl">
                    Tug'ilgan sana:
                  </label>
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
                  <div className="font-medium text-1xl">{user?.address}</div>
                </div>
                <div>
                  <label className="text-gray-600 text-1xl">Email:</label>
                  <div className="font-medium text-1xl">{user.email}</div>
                </div>
                <div>
                  <label className="text-gray-600 text-1xl">
                    TelefonRaqam:
                  </label>
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

          {/* New Work History Table */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-black mt-5">
              Ish faoliyati
            </h2>
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-3 text-left">№</th>
                  <th className="border p-3 pr-0 text-left">
                    Ish boshlagan sana
                  </th>
                  <th className="border p-3 pr-0 text-left">
                    Ish tugatgan sana
                  </th>
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
                      <td className="border p-3">
                        {years[0] || "Aniqlanmagan"}
                      </td>
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
            <h2 className="text-2xl font-bold mb-4 text-black mt-5">
              Ta'lim faoliyati
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border p-3 text-left">№</th>
                    <th className="border p-3 text-left">
                      O'qish boshlangan sana
                    </th>
                    <th className="border p-3 text-left">
                      O'qish tugagan sana
                    </th>
                    <th className="border p-3 text-left">
                      Ta'lim muassasa nomi
                    </th>
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
                        <td className="border p-3">
                          {years[0] || "Aniqlanmagan"}
                        </td>
                        <td className="border p-3">
                          {years[1] || "Hozirgacha"}
                        </td>
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
      ) : (
        <div className="p-8">
          <div className="mb-[100px] flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">
              Umumiy ma'lumotlar
            </h1>
            <div>
              <button
                className="btn text-center text-white bg-red-500 border-0 float-end"
                type="button"
                onClick={() => setisitOpen(true)}
              >
                <FontAwesomeIcon className="text-white" icon={faArrowLeft} />
                Qaytish
              </button>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-3 gap-32">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium">Ismini kiriting</label>
                  <input
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handlePersonalChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Ismi"
                  />
                </div>
                <div>
                  <label className="block font-medium">
                    Familiyasini kiriting
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={personalInfo.surname}
                    onChange={handlePersonalChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Familiyasi"
                  />
                </div>
                <div>
                  <label className="block font-medium">Kasbi</label>
                  <input
                    type="text"
                    name="job"
                    value={personalInfo.job}
                    onChange={handlePersonalChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Kasbi"
                  />
                </div>

                <div>
                  <label className="block font-medium">Manzili</label>
                  <input
                    type="text"
                    name="address"
                    value={personalInfo.address}
                    onChange={handlePersonalChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Manzil"
                  />
                </div>

                <button
                  type="button"
                  onClick={savePersonalInfo}
                  className="bg-green-500 text-white rounded w-[100px] h-[40px]"
                >
                  saqlash
                </button>
              </div>
              <div className="flex w-56 h-64 flex-col items-center justify-center border border-gray-300 rounded px-4 py-6">
                <label className="block font-medium mb-4">
                  Rasm yuklang...
                </label>
                <input type="file" className="w-full text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">
                Ta'lim darajasi haqida ma'lumot
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium">
                    Ta'lim muassasa nomi
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={education.institution}
                    onChange={handleEducationChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Muassasa nomi"
                  />
                </div>
                <div>
                  <label className="block font-medium">Ma'lumoti</label>
                  <input
                    type="text"
                    name="degree"
                    value={education.degree}
                    onChange={handleEducationChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Ma'lumoti"
                  />
                </div>
                <div>
                  <label className="block font-medium">Ta'lim davri</label>
                  <input
                    type="text"
                    name="period"
                    value={education.period}
                    onChange={handleEducationChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="2020-2024"
                  />
                </div>
                <div>
                  <label className="block font-medium">Mutaxassisligi</label>
                  <input
                    type="text"
                    name="specialty"
                    value={education.specialty}
                    onChange={handleEducationChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Mutaxassisligi"
                  />
                </div>

                <button
                  type="button"
                  onClick={saveEducation}
                  className="bg-green-500 text-white w-[100px] py-2 rounded"
                >
                  saqlash
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Oilasi haqida ma'lumot</h2>
              <table className="w-full border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">№</th>
                    <th className="border px-4 py-2">Oila a'zosi</th>
                    <th className="border px-4 py-2">F.I.Sh</th>
                    <th className="border px-4 py-2">Tug'ilgan sana</th>
                    <th className="border px-4 py-2">Manzil</th>
                    <th className="border px-4 py-2">Ish joyi</th>
                    <th className="border px-4 py-2">Ma'lumoti</th>
                    <th className="border px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {familyMembers.map((member, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={member.relation}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "relation",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                          placeholder="Oila a'zosi"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                          placeholder="F.I.Sh"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="date"
                          value={member.dob}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "dob",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={member.address}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "address",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                          placeholder="Manzil"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={member.workplace}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "workplace",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                          placeholder="Ish joyi"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={member.education}
                          onChange={(e) =>
                            handleFamilyMemberChange(
                              index,
                              "education",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                          placeholder="Ma'lumoti"
                        />
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          type="button"
                          className="text-red-500 font-bold"
                          onClick={() => removeFamilyMember(index)}
                        >
                          -
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={addFamilyMember}
              >
                +
              </button>
            </div>

            <div className="mt-6 space-x-4">
              <button
                type="button"
                onClick={saveFamily}
                className="bg-green-500 text-white px-6 py-2 rounded"
              >
                Oila ma'lumotlarini saqlash
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
