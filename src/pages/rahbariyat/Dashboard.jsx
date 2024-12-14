import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, BookOpen, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    variants={itemVariants}
    className={`bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 ${color}`}
  >
    <Icon size={40} />
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  </motion.div>
)

export default function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [employees, setEmployees] = useState([
    { id: 1, name: "Aziz Rahimov", department: "IT", position: "Dasturchi", education: "Oliy", grade: "Senior" },
    { id: 2, name: "Malika Karimova", department: "Marketing", position: "Menejer", education: "Oliy", grade: "Middle" },
    { id: 3, name: "Jasur Aliyev", department: "Moliya", position: "Hisobchi", education: "O'rta maxsus", grade: "Junior" },
  ])

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }])
    setIsModalOpen(false)
  }

  function handleUser(id){
    console.log(id);
    navigate("/user/id");
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-gray-800">Hodimlar statistikasi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} title="Jami hodimlar" value={150} color="text-blue-600" />
        <StatCard icon={GraduationCap} title="Oliy ma'lumotli" value={100} color="text-green-600" />
        <StatCard icon={BookOpen} title="O'rta maxsus" value={50} color="text-yellow-600" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center space-x-4 text-purple-600 hover:bg-purple-50 transition duration-300"
        >
          <UserPlus size={40} />
          <span className="text-lg font-semibold">Yangi hodim qo'shish</span>
        </motion.button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h3 className="text-xl font-semibold p-4 bg-gray-50">Hodimlar ro'yxati</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">F.I.SH</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bo'lim</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lavozim</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ma'lumoti</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Razryadi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                <motion.tr
                  key={employee.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={()=>{handleUser(employee.id)}}
                  style={{"cursor": "pointer"}}
                  className="hover:bg-gray-100 hover:text-blue-600 transition duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.position}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.education}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.grade}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <NewEmployeeModal onClose={() => setIsModalOpen(false)} onSubmit={addEmployee} />
      )}
    </motion.div>
  )
}

function NewEmployeeModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    department: '',
    position: '',
    education: '',
    grade: '',
    startDate: '',
    image: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Yangi hodim qo'shish</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Ism" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="text" name="surname" placeholder="Familiya" onChange={handleChange} className="input input-bordered w-full" required />

          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="password" name="password" placeholder="Parol" onChange={handleChange} className="input input-bordered w-full" required />

          <input type="text" name="department" placeholder="Bo'lim" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="text" name="position" placeholder="Lavozim" onChange={handleChange} className="input input-bordered w-full" required />

          <input type="text" name="education" placeholder="Ma'lumoti" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="text" name="grade" placeholder="Razryadi" onChange={handleChange} className="input input-bordered w-full" required />

          <input type="date" name="startDate" onChange={handleChange} className="input input-bordered w-full" required />
          <input type="file" name="image" onChange={handleChange} className="input input-bordered w-full" />

          <div className="col-span-1 md:col-span-2 flex justify-between mt-4">
            <button type="submit" className="btn btn-primary">Qo'shish</button>
            <button type="button" onClick={onClose} className="btn btn-error">Yopish</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
