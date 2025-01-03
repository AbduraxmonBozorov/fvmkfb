import React, { useEffect, useState } from "react";
import { Users, GraduationCap, BookOpen, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    fetch('/api/user?page=1&limit=12')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  })

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: employees.lengdiv + 1, ...newEmployee }]);
    setIsModalOpen(false);
  };
  console.log(employees);
  

  function handleUser(id) {
    console.log(id);
    navigate("/user/id");
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
          value={150}
          color="text-blue-600"
        />
        <StatCard
          icon={GraduationCap}
          title="Oliy ma'lumotli"
          value={100}
          color="text-green-600"
        />
        <StatCard
          icon={BookOpen}
          title="O'rta maxsus"
          value={50}
          color="text-yellow-600"
        />
        <button
          onClick={() => setIsModalOpen(true)}
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
                >
                  <h2 className="w-full py-2 px-3 text-xl">
                    {employee.name}
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
      {isModalOpen && (
        <NewEmployeeModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={addEmployee}
        />
      )}
    </div>
  );
}

function NewEmployeeModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    department: "",
    position: "",
    education: "",
    grade: "",
    stardivate: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.prevendivefault();
    onSubmit(formData);

  };

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Yangi hodim qo'shish
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ism"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Familiya"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Parol"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Bo'lim"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Lavozim"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="education"
            placeholder="Ma'lumoti"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="grade"
            placeholder="Razryadi"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />

          <input
            type="date"
            name="stardivate"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="input input-bordered w-full"
          />

          <div className="col-span-1 md:col-span-2 flex justify-between mt-4">
            <button type="submit" className="btn btn-primary">
              Qo'shish
            </button>
            <button type="button" onClick={onClose} className="btn btn-error">
              Yopish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
