import React from "react";
import QurilishModal from "../../components/QurilishModal";

function Qurilish() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl font-semibold">Qurilish va ta'mirlash</h1>
        <button className=" btn btn-success">Qo'shish</button>
      </div>
      <div className="bolimlar grid gap-5 grid-cols-2 md:grid-cols-5 mt-3">
        <div className="jfmk bg-slate-300 p-2 rounded-sm relative group">
          <h2 className="text-xl text-center text-green-500">JFMK</h2>
          <p className="font-semibold">Jami sarflangan mablag'</p>
          <span>50 000 000</span>

          {/* Hoverda chiqadigan matn */}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                   hidden group-hover:block bg-black text-white text-xs 
                   px-2 py-1 rounded text-center"
          >
            Janubiy Farg'ona magistral kanali
          </span>
        </div>
        <div className="kamk bg-slate-300 p-2 rounded-sm relative group">
          <h2 className="text-xl text-center text-green-500">KAMK</h2>
          <p className="font-semibold">Jami sarflangan mablag'</p>
          <span>80 000 000</span>

          {/* Hoverda chiqadigan matn */}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                   hidden group-hover:block bg-black text-white text-xs 
                   px-2 py-1 rounded text-center"
          >
            Katta Andijon magistral kanali
          </span>
        </div>
        <div className="kfmk bg-slate-300 p-2 rounded-sm relative group">
          <h2 className="text-xl text-center text-green-500">KFMK</h2>
          <p className="font-semibold">Jami sarflangan mablag'</p>
          <span>150 000 000</span>

          {/* Hoverda chiqadigan matn */}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                   hidden group-hover:block bg-black text-white text-xs 
                   px-2 py-1 rounded text-center"
          >
            Katta Farg'ona magistral kanali
          </span>
        </div>
        <div className="kso bg-slate-300 p-2 rounded-sm relative group">
          <h2 className="text-xl text-center text-green-500">KSO</h2>
          <p className="font-semibold">Jami sarflangan mablag'</p>
          <span>75 000 000</span>

          {/* Hoverda chiqadigan matn */}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                   hidden group-hover:block bg-black text-white text-xs 
                   px-2 py-1 rounded text-center"
          >
            Karkidon suv ombori
          </span>
        </div>
        <div className="mfso bg-slate-300 p-2 rounded-sm relative group">
          <h2 className="text-xl text-center text-green-500">MFSO</h2>
          <p className="font-semibold">Jami sarflangan mablag'</p>
          <span>95 800 000</span>

          {/* Hoverda chiqadigan matn */}
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 
                   hidden group-hover:block bg-black text-white text-xs 
                   px-2 py-1 rounded text-center"
          >
            Markaziy Farg'ona suv ombori
          </span>
        </div>
      </div>

      <div className="jadval mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Joy nomi</th>
              <th>Bajarilgan ish</th>
              <th>Summasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>JFMK-Quva-2uchastka-468PK</td>
              <td>Kanal ta'mirlash</td>
              <td>1 500 00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <QurilishModal />

    </div>
  );
}

export default Qurilish;
