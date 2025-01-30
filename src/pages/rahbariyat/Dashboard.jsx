import React, { useEffect, useState } from "react";
import { Users, GraduationCap, BookOpen, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div
    variants={itemVariants}
    className={`bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 ${color}`}
  >
    <Icon size={40} />
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  </div>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([])
  const [oliy, setOliy] = useState(0);
  const [ortaMaxsus, setOrtaMaxsus] = useState(0);

  useEffect(()=>{
    fetch('/api/user?page=1&limit=12')
    .then((response) => response.json())
    .then((data) => {
      setEmployees(data.users)
    })    
    .catch((error) => console.error(error));
  }, []);

  useEffect(()=>{
    console.log(employees);
  }, [employees])
  

  function handleUser(id) {
    navigate(`user/${id}`)
  }

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-gray-800">
        Hodimlar statistikasi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          title="Jami hodimlar"
          value={employees.length}
          color="text-blue-600"
        />
        <StatCard
          icon={GraduationCap}
          title="Oliy ma'lumotli"
          value={oliy}
          color="text-green-600"
        />
        <StatCard
          icon={BookOpen}
          title="O'rta maxsus"
          value={ortaMaxsus}
          color="text-yellow-600"
        />
        <button
          onClick={()=>{navigate("/addUser")}}
          className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center space-x-4 text-purple-600 hover:bg-purple-50 transition duration-300"
        >
          <UserPlus size={40} />
          <span className="text-lg font-semibold">Yangi hodim qo'shish</span>
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg mt-3">
        <h3 className="text-xl font-semibold rounded-lg p-4 bg-gray-50">
          Hodimlar ro'yxati
        </h3>

        <section className=" user-table w-full">
          <div className="thead flex flex-row justify-between align-middle bg-gray-50">
            <h2 className="w-full py-2 px-3 text-xl font-semibold">F.I.SH</h2>
            <h2 className="w-full py-2 px-3 text-xl font-semibold">Bo'lim</h2>
            <h2 className="w-full py-2 px-3 text-xl font-semibold">Lavozimi</h2>
            <h2 className="w-full py-2 px-3 text-xl font-semibold">
              Ma'lumoti
            </h2>
            <h2 className="w-full py-2 px-3 text-xl font-semibold">
              Tashkiloti
            </h2>
            <h2 className="w-full py-2 px-3 text-xl font-semibold">Razryadi</h2>
          </div>
          <div className="tbody max-h-[530px] border overflow-y-auto">
            {employees.length > 0 ? (
              employees.map((employee, id) => (
                <div
                  key={id}
                  className="tbody-tr flex flex-row justify-between align-middle hover:bg-gray-100 hover:text-blue-300 cursor-pointer"
                  onClick={()=>{handleUser(employee.user_id)}}
                >
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.fullname}
                  </h2>
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.department}
                  </h2>
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.position}
                  </h2>
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.education}
                  </h2>
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.entity ? employee.entity : "BDM"}
                  </h2> 
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.grade}
                  </h2>
                </div>
              ))
            ) : (
              <h1 className="m-5 text-2xl font-semibold">Foydalanuvchi topilmadi!</h1>
            )}
          </div>
        </section>
      </div>
      <Pagination currentPage={1} totalPages={5} />
      
    </div>
  );
}

