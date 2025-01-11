import React, { useState } from "react";

export default function Settings() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        dob: "",
        address: "",
        education: {
            institution: "",
            degree: "",
            period: "",
            specialty: "",
        },
        familyMembers: [
            { relation: "", name: "", dob: "", address: "", workplace: "", education: "" },
        ],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            education: { ...formData.education, [name]: value },
        });
    };

    const handleFamilyMemberChange = (index, field, value) => {
        const updatedMembers = [...formData.familyMembers];
        updatedMembers[index][field] = value;
        setFormData({ ...formData, familyMembers: updatedMembers });
    };

    const addFamilyMember = () => {
        setFormData({
            ...formData,
            familyMembers: [
                ...formData.familyMembers,
                { relation: "", name: "", dob: "", address: "", workplace: "", education: "" },
            ],
        });
    };

    const removeFamilyMember = (index) => {
        const updatedMembers = formData.familyMembers.filter((_, i) => i !== index);
        setFormData({ ...formData, familyMembers: updatedMembers });
    };

    const handleSave = () => {
        console.log("Saqlangan ma'lumotlar:", formData);
        alert("Ma'lumotlar muvaffaqiyatli saqlandi!");
    };

    return (
        <div className="p-8">
            <h1 className="text-xl font-bold mb-6">Ma'lumotlarni kiriting</h1>
            <form className="space-y-4">
                <div className="grid grid-cols-3 gap-32">
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Ismini kiriting</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Ismi"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Familiyasini kiriting</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Familiyasi"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Tug'ilgan sanasi</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium">Manzili</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Manzil"
                            />
                        </div>
                    </div>
                    <div className="flex w-56 h-64 flex-col items-center justify-center border border-gray-300 rounded px-4 py-6">
                        <label className="block font-medium mb-4">Rasm yuklang...</label>
                        <input type="file" className="w-full text-sm" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Ta'lim darajasi haqida ma'lumot</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium">Ta'lim muassasa nomi</label>
                            <input
                                type="text"
                                name="institution"
                                value={formData.education.institution}
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
                                value={formData.education.degree}
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
                                value={formData.education.period}
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
                                value={formData.education.specialty}
                                onChange={handleEducationChange}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="Mutaxassisligi"
                            />
                        </div>
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
                            {formData.familyMembers.map((member, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">
                                        <input
                                            type="text"
                                            value={member.relation}
                                            onChange={(e) =>
                                                handleFamilyMemberChange(index, "relation", e.target.value)
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
                                                handleFamilyMemberChange(index, "name", e.target.value)
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
                                                handleFamilyMemberChange(index, "dob", e.target.value)
                                            }
                                            className="w-full border border-gray-300 rounded px-2 py-1"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <input
                                            type="text"
                                            value={member.address}
                                            onChange={(e) =>
                                                handleFamilyMemberChange(index, "address", e.target.value)
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
                                                handleFamilyMemberChange(index, "workplace", e.target.value)
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
                                                handleFamilyMemberChange(index, "education", e.target.value)
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

                <div className="mt-6">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="bg-green-500 text-white px-6 py-2 rounded"
                    >
                        Saqlash
                    </button>
                </div>
            </form>
        </div>
    );
}
