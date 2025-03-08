import { useState } from "react";

export default function PurchaseTable() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: "", quantity: "", price: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addProduct = () => {
        if (!form.name || !form.quantity || !form.price) return;
        setProducts([...products, { ...form, id: Date.now() }]);
        setForm({ name: "", quantity: "", price: "" });
    };

    const removeProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const totalSum = products.reduce((acc, curr) => acc + Number(curr.price), 0);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <div className="grid grid-cols-4 gap-4 mb-4">
                <input type="text" placeholder="Mahsulot nomi" name="name" value={form.name} onChange={handleChange} className="border p-2 rounded" />
                <input type="number" placeholder="Miqdori" name="quantity" value={form.quantity} onChange={handleChange} className="border p-2 rounded" />
                <input type="number" placeholder="Summasi" name="price" value={form.price} onChange={handleChange} className="border p-2 rounded" />
                <button onClick={addProduct} className="bg-blue-500 text-white p-2 rounded">Qo'shish</button>
            </div>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">№</th>
                        <th className="border p-2">Sotib olingan mahsulot nomi</th>
                        <th className="border p-2">Miqdori kg/dona</th>
                        <th className="border p-2">Summasi</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id} className="text-center">
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{product.name}</td>
                            <td className="border p-2">{product.quantity}</td>
                            <td className="border p-2">{product.price}</td>
                            <td className="border p-2">
                                <button onClick={() => removeProduct(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">O'chirish</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="text-right font-bold mt-4">Jami summa: {totalSum} so'm</div>
        </div>
    );
}
