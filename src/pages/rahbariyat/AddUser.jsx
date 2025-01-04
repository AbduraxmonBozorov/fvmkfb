import React, { useState } from "react";
import WorkExperienceTable from "../../components/workExperiance/WorkExperiance";
import FamilyTable from "../../components/familyTable/FamilyTable";

function AddUser() {
  const [eduId, setEduId] = useState(1);

  const ind = 1;


  const handleSubmit = (e) => {
       
        
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* First name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ismini kiriting
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Last name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Familiyasini kiriting
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Birthday */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="birthday"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Tug'ilgan sanasi
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="birthday"
                    id="birthday"
                    autoComplete="birthday"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Manzili
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="address"
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
                    type="text"
                    name="position"
                    id="position"
                    autoComplete="position"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
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
                    type="text"
                    name="edu-name"
                    id="edu-name"
                    autoComplete="department"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* education */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="education"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ma'lumoti
                </label>
                <div className="mt-2">
                  <input
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
                <WorkExperienceTable />
              </div>

              {/* Family-info */}
              <div className="sm:col-span-6">
                <FamilyTable />
              </div>
            </div>
          </div>

          
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm/6 font-semibold text-gray-900">
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
