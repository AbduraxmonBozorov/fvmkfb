import React from "react";
import userImage from "../assets/images/user-01.png";
import { useNavigate } from "react-router-dom";

const xodimlar = [
  {
    fish: "Shuxrat Abdusamatov",
    bolim: "Rahbariyat",
    lavozimi: "Boshqarma boshlig'i",
    malumoti: "Oliy",
    razyad: 15,
    id: 1,
  },
  {
    fish: "O'tkirbek Xaydarov",
    bolim: "Rahbariyat",
    lavozimi: "Birinchi o'rinbosar",
    malumoti: "Oliy",
    razyad: 14,
    id: 2,
  },
  {
    fish: "Abror Xolmatov",
    bolim: "Rahbariyat",
    lavozimi: "O'rinbosar",
    malumoti: "Oliy",
    razyad: 13,
    id: 3,
  },
  {
    fish: "Gulyoraxon Qayumova",
    bolim: "Kadrlar",
    lavozimi: "Bosh mutaxasis",
    malumoti: "Oliy",
    razyad: 10,
    id: 4,
  },
  {
    fish: "Abduraxmon Bozorov",
    bolim: "AKT",
    lavozimi: "Bosh mutaxasis",
    malumoti: "Oliy",
    razyad: 11,
    id: 5,
  },
];

function StaffTable() {
    const navigate = useNavigate();

    function handleUser(id){
        navigate(`/user/${id}`)
    }
  return (
    <div className="rounded-md shadow-lg border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Barcha xodimlar
        </h4>
      </div>
      <table
        className="table-auto border border-collapse border-boxdark mx-auto table-striped"
        style={{ width: "1000px" }}
      >
        <thead className="bg-emerald-950 text-black">
          <tr>
            <th className="text-start p-2 sm:p-3 text-white">№</th>
            <th className="text-start p-2 sm:p-3 text-white">F.I.SH</th>
            <th className="text-start p-2 sm:p-3 text-white">Bo'lim</th>
            <th className="text-start p-2 sm:p-3 text-white">Lavozimi</th>
            <th className="text-start p-2 sm:p-3 text-white">Ma'lumoti</th>
            <th className="text-start p-2 sm:p-3 text-white">Razryadi</th>
          </tr>
        </thead>
        <tbody>
          {xodimlar.length &&
            xodimlar.map((xodim) => (
              <tr
                className="cursor-pointer hover:bg-slate-100"
                key={xodim.id}
                onClick={() => {
                  handleUser(xodim.id);
                }}
              >
                <th className="border-b p-2 sm:p-3 text-left">{xodim.id}</th>
                <td className="border-b p-2 sm:p-3">{xodim.fish}</td>
                <td className="border-b p-2 sm:p-3">{xodim.bolim}</td>
                <td className="border-b p-2 sm:p-3">{xodim.lavozimi}</td>
                <td className="border-b p-2 sm:p-3">{xodim.malumoti}</td>
                <td className="border-b p-2 sm:p-3">{xodim.razyad}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default StaffTable;
