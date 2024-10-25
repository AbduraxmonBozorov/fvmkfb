import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import {
  faArrowUp,
  faArrowDown,
  faUserTie,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import StaffTable from "../../components/StaffTable";

function Dashboard() {
  return (
    <div className="w-full h-full overflow-y-auto bg-slate-100">
      <div className="about-staff text-justify w-10/12 mx-auto grid grid-cols-4 gap-5 mt-5">
        <div className="all-staff  p-2 md:p-5 cursor-pointer bg-white">
          <div className="img  w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUsers} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <h2 className="">545</h2>
              <p>Jami xodimlar</p>
            </div>
            <div className="persentage flex items-center text-green-600">
              <span>0.43</span>
              <span>%</span>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>

        <div className="bachalor-staff  p-2 md:p-5 cursor-pointer bg-white">
          <div className="img  w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUserTie} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <h2 className="">375</h2>
              <p>Oliy malumotli</p>
            </div>
            <div className="persentage flex items-center text-green-600">
              <span>4.35</span>
              <span>%</span> <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>

        <div className="medium-staff  p-2 md:p-5 cursor-pointer bg-white">
          <div className="img  w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <h2 className="">170</h2>
              <p>O'rta maxsus</p>
            </div>
            <div className="persentage flex items-center text-blue-600">
              <span>2.8</span>
              <span>%</span> <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>

        <div className="new-staff  p-2 md:p-5 cursor-pointer bg-white">
          <div className="img  w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUserPlus} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            Yangi xodim qo'shish
          </div>
        </div>
      </div>

      <div className="table w-10/12 mx-auto mt-10">
        <StaffTable />
      </div>
    </div>
  );
}

export default Dashboard;
