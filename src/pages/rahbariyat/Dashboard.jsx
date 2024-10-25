import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faArrowUp, faArrowDown, faUserTie, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import StaffTable from "../../components/StaffTable";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-slate-100">
      <div className="about-staff text-justify w-10/12 mx-auto grid grid-cols-4 gap-5 mt-5">
        <div className="all-staff p-2 md:p-5 cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all">
          <div className="img w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUsers} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <h2 className="text-2xl font-semibold">545</h2>
              <p className="text-gray-600">Jami xodimlar</p>
            </div>
            <div className="persentage flex items-center text-green-600">
              <span>0.43</span>
              <span>%</span>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>

        <div className="bachalor-staff p-2 md:p-5 cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all">
          <div className="img w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUserTie} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <h2 className="text-2xl font-semibold">375</h2>
              <p className="text-gray-600">Oliy malumotli</p>
            </div>
            <div className="persentage flex items-center text-green-600">
              <span>4.35</span>
              <span>%</span>
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
        </div>

        <div className="medium-staff p-2 md:p-5 cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all">
          <div className="img w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <h2 className="text-2xl font-semibold">170</h2>
              <p className="text-gray-600">O'rta maxsus</p>
            </div>
            <div className="persentage flex items-center text-blue-600">
              <span>2.8</span>
              <span>%</span>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>

        <div onClick={openModal} className="new-staff p-2 md:p-5 cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-all">
          <div className="img w-16 rounded-full h-16 flex items-center justify-center bg-slate-200">
            <FontAwesomeIcon icon={faUserPlus} className="text-2xl" />
          </div>
          <div className="mt-5 flex flex-row justify-between">
            <span className="text-blue-600 font-medium">Yangi xodim qo'shish</span>
          </div>
        </div>
      </div>

      <div className="table w-10/12 mx-auto mt-10">
        <StaffTable />
      </div>

      <dialog id="my_modal_3" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <form method="dialog">
            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-6">Yangi xodim qo'shish</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Ism</span>
              </label>
              <input 
                type="text" 
                placeholder="Ismni kiriting" 
                className="input input-bordered w-full" 
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Familiya</span>
              </label>
              <input 
                type="text" 
                placeholder="Familiyani kiriting" 
                className="input input-bordered w-full" 
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="Email manzilini kiriting" 
                className="input input-bordered w-full" 
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Parol</span>
              </label>
              <input 
                type="password" 
                placeholder="Parolni kiriting" 
                className="input input-bordered w-full" 
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rasm</span>
              </label>
              <input 
                type="file" 
                className="file-input file-input-bordered w-full" 
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Ishga kirgan sana</span>
              </label>
              <input 
                type="date" 
                className="input input-bordered w-full" 
              />
            </div>

            <div className="modal-action">
              <button type="button" onClick={closeModal} className="btn">Bekor qilish</button>
              <button type="submit" className="btn btn-primary">Saqlash</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Dashboard;