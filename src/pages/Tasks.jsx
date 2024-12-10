import React, { useState } from 'react'
import Pagination from '../components/Pagination';
export default function Tasks() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        name: '',
        status: '',
        responsible: ''
    });

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleSaveTask = () => {
        console.log('Yangi topshiriq:', newTask);
        setIsModalOpen(false);
    };

    const tasks = [
        {
            id: 1,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 2,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 3,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 4,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 5,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 6,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 7,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 8,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 9,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        },

        {
            id: 10,
            name: 'Kanalga yangi koprik qurish',
            status: 'Jarayonda',
            responsible: 'Ismoil Khusanov'
        }
    ];


    return (
        <div>
            <div className="mx-auto flex items-center justify-between border-2 border-blue-200 rounded-md shadow-lg p-4">
                <span className='text-1xl font-semibold border-2 border-blue-200 flex justify-center p-2 cursor-pointer hover:bg-slate-300 rounded-md w-[250px]'>Barcha topshiriqlar</span>
                <span className='text-1xl font-semibold border-2 border-blue-200 flex justify-center p-2 cursor-pointer hover:bg-slate-300 rounded-md w-[250px]'>Jarayondagi topshiriqlar</span>
                <span className='text-1xl font-semibold border-2 border-blue-200 flex justify-center p-2 cursor-pointer hover:bg-slate-300 rounded-md w-[250px]'>Bajarilgan topshiriqlar</span>
                <span onClick={() => setIsModalOpen(true)} className='text-1xl font-semibold border-2 border-blue-200 flex justify-center p-2 cursor-pointer hover:bg-slate-300 rounded-md w-[250px]'>Topshiriq yaratish</span>
            </div>
            <div className="overflow-x-auto mt-10 mb-12 rounded-lg border border-gray-200">
                <table className="w-full min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-[#5B99D2] text-white">
                            <th className="px-6 py-3 text-left text-sm font-medium">№</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Topshiriq nomi</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Holati</th>
                            <th className="px-6 py-3 text-left text-sm font-medium">Masul xodimlar</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {tasks.map((task, index) => (
                            <tr
                                key={task.id}
                                className={index % 2 === 0 ? 'bg-white' : 'bg-[#EDF5FC]'}
                            >
                                <td className="px-6 py-4 text-sm">{task.id}</td>
                                <td className="px-6 py-4 text-sm">{task.name}</td>
                                <td className="px-6 py-4 text-sm">{task.status}</td>
                                <td className="px-6 py-4 text-sm">{task.responsible}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination currentPage={1} totalPages={3} />

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                        <h2 className="text-xl font-bold mb-4">Yangi Topshiriq</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Topshiriq nomi</label>
                            <input
                                type="text"
                                name="name"
                                value={newTask.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Holati</label>
                            <input
                                type="text"
                                name="status"
                                value={newTask.status}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Masul xodimlar</label>
                            <input
                                type="text"
                                name="responsible"
                                value={newTask.responsible}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded-md"
                            >
                                Bekor qilish
                            </button>
                            <button
                                onClick={handleSaveTask}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            >
                                Saqlash
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
