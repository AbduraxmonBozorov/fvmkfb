import React, { useState } from 'react';
import Pagination from '../components/Pagination';

export default function Tasks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterStatus, setFilterStatus] = useState('');
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Kanalga yangi ko‘prik qurish', status: 'Jarayonda', responsible: 'Ismoil Khusanov' },
        { id: 2, name: 'Yangi loyihani boshlash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 3, name: 'Hisobot tayyorlash', status: 'Bajarilgan', responsible: 'Said Valiyev' },
        { id: 4, name: 'Dasturiy ta’minotni testlash', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 5, name: 'Ma’lumotlarni zaxiralash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 6, name: 'Mijozlar bilan uchrashuv', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 1, name: 'Kanalga yangi ko‘prik qurish', status: 'Jarayonda', responsible: 'Ismoil Khusanov' },
        { id: 2, name: 'Yangi loyihani boshlash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 3, name: 'Hisobot tayyorlash', status: 'Bajarilgan', responsible: 'Said Valiyev' },
        { id: 4, name: 'Dasturiy ta’minotni testlash', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 5, name: 'Ma’lumotlarni zaxiralash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 6, name: 'Mijozlar bilan uchrashuv', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 1, name: 'Kanalga yangi ko‘prik qurish', status: 'Jarayonda', responsible: 'Ismoil Khusanov' },
        { id: 2, name: 'Yangi loyihani boshlash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 3, name: 'Hisobot tayyorlash', status: 'Bajarilgan', responsible: 'Said Valiyev' },
        { id: 4, name: 'Dasturiy ta’minotni testlash', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 5, name: 'Ma’lumotlarni zaxiralash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 6, name: 'Mijozlar bilan uchrashuv', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 1, name: 'Kanalga yangi ko‘prik qurish', status: 'Jarayonda', responsible: 'Ismoil Khusanov' },
        { id: 2, name: 'Yangi loyihani boshlash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 3, name: 'Hisobot tayyorlash', status: 'Bajarilgan', responsible: 'Said Valiyev' },
        { id: 4, name: 'Dasturiy ta’minotni testlash', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 5, name: 'Ma’lumotlarni zaxiralash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 6, name: 'Mijozlar bilan uchrashuv', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 1, name: 'Kanalga yangi ko‘prik qurish', status: 'Jarayonda', responsible: 'Ismoil Khusanov' },
        { id: 2, name: 'Yangi loyihani boshlash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 3, name: 'Hisobot tayyorlash', status: 'Bajarilgan', responsible: 'Said Valiyev' },
        { id: 4, name: 'Dasturiy ta’minotni testlash', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 5, name: 'Ma’lumotlarni zaxiralash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 6, name: 'Mijozlar bilan uchrashuv', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 1, name: 'Kanalga yangi ko‘prik qurish', status: 'Jarayonda', responsible: 'Ismoil Khusanov' },
        { id: 2, name: 'Yangi loyihani boshlash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 3, name: 'Hisobot tayyorlash', status: 'Bajarilgan', responsible: 'Said Valiyev' },
        { id: 4, name: 'Dasturiy ta’minotni testlash', status: 'Jarayonda', responsible: 'Murod Islomov' },
        { id: 5, name: 'Ma’lumotlarni zaxiralash', status: 'Bajarilgan', responsible: 'Ali Ahmedov' },
        { id: 6, name: 'Mijozlar bilan uchrashuv', status: 'Jarayonda', responsible: 'Murod Islomov' }
    ]);

    const [newTask, setNewTask] = useState({
        name: '',
        status: '',
        responsible: ''
    });

    const filteredTasks = filterStatus
        ? tasks.filter(task => task.status === filterStatus)
        : tasks;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    };

    const handleSaveTask = () => {
        const newTaskData = {
            id: tasks.length + 1,
            ...newTask
        };
        setTasks([...tasks, newTaskData]);
        setIsModalOpen(false);
        setNewTask({ name: '', status: '', responsible: '' });
    };


return (
    <div className="p-6">
        <div className="flex justify-between gap-4 mb-6">
            <button
                onClick={() => setFilterStatus('')}
                className="bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded hover:bg-blue-300">
                Barcha topshiriqlar
            </button>
            <button
                onClick={() => setFilterStatus('Jarayonda')}
                className="bg-yellow-200 text-yellow-700 font-semibold py-2 px-4 rounded hover:bg-yellow-300">
                Jarayondagi topshiriqlar
            </button>
            <button
                onClick={() => setFilterStatus('Bajarilgan')}
                className="bg-green-200 text-green-700 font-semibold py-2 px-4 rounded hover:bg-green-300">
                Bajarilgan topshiriqlar
            </button>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Topshiriq yaratish
            </button>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="py-2 px-4 text-left">№</th>
                        <th className="py-2 px-4 text-left">Topshiriq nomi</th>
                        <th className="py-2 px-4 text-left">Holati</th>
                        <th className="py-2 px-4 text-left">Mas'ul xodim</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map((task, index) => (
                        <tr key={task.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                            <td className="py-2 px-4">{task.id}</td>
                            <td className="py-2 px-4">{task.name}</td>
                            <td className="py-2 px-4">{task.status}</td>
                            <td className="py-2 px-4">{task.responsible}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="mt-6">
            <Pagination currentPage={1} totalPages={3} />
        </div>

        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Yangi Topshiriq</h2>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Topshiriq nomi</label>
                        <input
                            type="text"
                            name="name"
                            value={newTask.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Holati</label>
                        <input
                            type="text"
                            name="status"
                            value={newTask.status}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Mas'ul xodim</label>
                        <input
                            type="text"
                            name="responsible"
                            value={newTask.responsible}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                            Bekor qilish
                        </button>
                        <button
                            onClick={handleSaveTask}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Saqlash
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}
