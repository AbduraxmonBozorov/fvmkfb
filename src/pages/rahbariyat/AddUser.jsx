import React, { useRef, useState } from "react";
import WorkExperienceTable from "../../components/workExperiance/WorkExperiance";
import FamilyTable from "../../components/familyTable/FamilyTable";

function AddUser() {
  const [firstname, setFirstname] = useState("Abduraxmon");
  const [lastname, setLastname] = useState("Bozorov");
  const [role, setRole] = useState("hodim");
  const [birth_date, setBirth_Date] = useState("");
  const [address, setAddress] = useState(
    "Farg'ona viloyati Oltiariq tumani Jarqo'rg'ona MFY Qadriyat ko'chasi 6-uy"
  );
  const [imagePreview, setImagePreview] = useState("");
  const [jobPlace, setJobPlace] = useState(
    "Farg'ona vodiysi magistral kanallaridan foydalanish boshqarmasi"
  );
  const [department, setDepartment] = useState(
    "Axborot kommunikatsiya texnologiyalari va raqamli texnologiyalarni rivojlantirish bo'limi"
  );
  const [position, setPosition] = useState("Bo'lim boshlig'i");
  const [eduName, setEduName] = useState(
    "Toshkent Axborot Texnologiyalari Universiteti"
  );
  const [education, setEducation] = useState("Oliy");
  const [eduPeriod, setEduPeriod] = useState("2018-2022");
  const [specialty, setSpecialty] = useState("Kompyuter injiner");
  const [phone, setPhone] = useState("998905305053");
  const [email, setEmail] = useState("abduraxmon@gmail.com");
  const [workExperiences, setworkExperiences] = useState([]);
  const [familyMembers, setFamilyMembers] = useState([]);

  const [picFile, setPicFile] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newJob = {
      id: workExperiences.length + 1, // ID qatorlar soniga asoslanadi
      period: `${new Date().getFullYear()} - now`,
      organization: jobPlace,
      department,
      position,
    };

    let workExperiences1 = [...workExperiences, newJob];

    const newEmployee = {
      fullname: `${firstname} ${lastname}`,
      email: email,
      role,
      birth_date: birth_date,
      department,
      position,
      picture: imagePreview,
      address: address,
      phone,
      edu: [
        {
          edu_name: eduName,
          study_year: eduPeriod,
          degree: education,
          specialty,
        },
      ],
      familyMembers: familyMembers,
      workExperiences: workExperiences1,
    };

    const formData = new FormData();
    formData.append("fullname", newEmployee.fullname);
    formData.append("email", email);
    formData.append("role", role);
    formData.append("birth_date", birth_date);
    formData.append("department", department);
    formData.append("position", position);
    formData.append("picture", picFile);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("edu", JSON.stringify(newEmployee.edu));
    formData.append("familyMembers", JSON.stringify(familyMembers));
    formData.append("workExperiences", JSON.stringify(workExperiences1));
    const arr = [formData];

    const arr1 = [newEmployee];

    try {
      const response = await fetch(`/user/register`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Serverdan javob:", result);
      } else {
        console.error("Serverda xatolik:", response.status);
      }
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  // Rasm yuklash funksiyasi
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPicFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl ">
        Yangi xodim ma'lumotlarini kiriting
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
              <div className="sm:col-span-2 ">
                <div className="grid grid-cols-4 gap-4 ">
                  {/* First name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Ismini kiriting
                    </label>
                    <div className="mt-2">
                      <input
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  {/* Last name */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Familiyasini kiriting
                    </label>
                    <div className="mt-2">
                      <input
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  {/* birth_date */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="birth_date"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Tug'ilgan sanasi
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => {
                          setBirth_Date(e.target.value);
                        }}
                        type="date"
                        name="birth_date"
                        id="birth_date"
                        autoComplete="birth_date"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Manzili
                    </label>
                    <div className="mt-2">
                      <input
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Rasm yuklash */}
              <div className="col-span-1 border">
                <div className="flex w-56 h-64 flex-col items-center justify-center border border-gray-300 rounded px-4 py-6">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Uploaded"
                      className="w-full h-full object-contain rounded"
                    />
                  ) : (
                    <label className="block font-medium mb-4 text-center">
                      Rasm yuklang...
                    </label>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full text-sm"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* JobPlace */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="jobPlace"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ish joyi
                </label>
                <div className="mt-2">
                  <input
                    value={jobPlace}
                    onChange={(e) => {
                      setJobPlace(e.target.value);
                    }}
                    type="text"
                    name="jobPlace"
                    id="jobPlace"
                    autoComplete="jobPlace"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Department */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="department"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Bo'limi
                </label>
                <div className="mt-2">
                  <input
                    value={department}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                    type="text"
                    name="department"
                    id="department"
                    autoComplete="department"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Position */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="position"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Lavozimi
                </label>
                <div className="mt-2">
                  <input
                    value={position}
                    onChange={(e) => {
                      setPosition(e.target.value);
                    }}
                    type="text"
                    name="position"
                    id="position"
                    autoComplete="position"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* role */}
              <div className="sm:col-span-3">
                <select
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  name="role"
                  id="role"
                  className="select bg-white text-black w-full"
                >
                  <option value="hodim">Hodim</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="edu-info w-full d-block mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Edu-name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="edu-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ta'lim muassasa nomi
                </label>
                <div className="mt-2">
                  <input
                    value={eduName}
                    onChange={(e) => {
                      setEduName(e.target.value);
                    }}
                    type="text"
                    name="edu-name"
                    id="edu-name"
                    autoComplete="department"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Education */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="education"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ma'lumoti
                </label>
                <div className="mt-2">
                  <input
                    value={education}
                    onChange={(e) => {
                      setEducation(e.target.value);
                    }}
                    type="text"
                    name="education"
                    id="education"
                    autoComplete="education"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Edu-period */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="edu-period"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ta'lim davri
                </label>
                <div className="mt-2">
                  <input
                    value={eduPeriod}
                    onChange={(e) => {
                      setEduPeriod(e.target.value);
                    }}
                    type="text"
                    name="edu-period"
                    id="edu-period"
                    autoComplete="edu-period"
                    placeholder="2018-2022"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* specialty */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="specialty"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Mutaxasisligi
                </label>
                <div className="mt-2">
                  <input
                    value={specialty}
                    onChange={(e) => {
                      setSpecialty(e.target.value);
                    }}
                    type="text"
                    name="specialty"
                    id="specialty"
                    autoComplete="specialty"
                    placeholder="Quruvchi muhandis"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Phone */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Telefon nomeri
                </label>
                <div className="mt-2">
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    placeholder="998901234567"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="Email"
                    id="Email"
                    autoComplete="Email"
                    placeholder="example@gmail.com"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Work experiance */}
              <div className="sm:col-span-6">
                <WorkExperienceTable
                  workExperiences={workExperiences}
                  setworkExperiences={setworkExperiences}
                />
              </div>

              {/* Family-info */}
              <div className="sm:col-span-6">
                <FamilyTable
                  familyMembers={familyMembers}
                  setFamilyMembers={setFamilyMembers}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

//

// const yangiXodim={
//   fullName: "Abduraxmon Bozorov",
//   birth_date: "1999-05-15",
//   address: "Farg'ona viloyati Oltiariq tumani",
//   userPicture: "",
//   edu: [
//     {
//       eduName: "TATU",
//       eduPeriod: "2018-2022",
//       degree: "oliy",
//       specialty: "muhandis"
//     },
//     {
//       eduName: "FarPI",
//       eduPeriod: "2018-2022",
//       degree: "oliy",
//       specialty: "muhandis"
//     },
//   ],
//   phone: "998905305053",
//   email: "abduraxmon@gmail.com",
//   workExperiance: [
//     {
//       jobYear: "2015-2020",
//       organizationName: "vehivgbweriv",
//       department: "AKT",
//       position: "mutaxasis"

//     },
//     {
//       jobYear: "2015-2020",
//       organizationName: "vehivgbweriv",
//       department: "AKT",
//       position: "mutaxasis"

//     },
//     {
//       jobYear: "2015-2020",
//       organizationName: "vehivgbweriv",
//       department: "AKT",
//       position: "mutaxasis"

//     },
//   ],
//   familyMembers:[
//     {
//       familyMember: "Otasi",
//       fullName: "Abdumutalib Bozorov",
//       birth_date: "1974-04-25",
//       address: "fehgertherthert",
//       workPlace: "gethwerghwerghw",
//       degree: "oliy"
//     }
//   ]

// }
