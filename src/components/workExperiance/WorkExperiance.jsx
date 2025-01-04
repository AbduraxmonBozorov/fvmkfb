import React, { useState } from "react";
import "./WorkExperienceTable.css";

const WorkExperienceTable = () => {
  // Jadval ma'lumotlarini saqlash uchun useState
  const [rows, setRows] = useState([
    { id: 1, period: "2020-2022", organization: "OpenAI", department: "Dasturiy bo'lim", position: "Dasturchi" },
    { id: 2, period: "2022-2025", organization: "Google", department: "Sun'iy intellekt", position: "Bosh mutaxassis" },
  ]);

  // Yangi qator qo'shadigan funksiya
  const addRow = () => {
    const newRow = {
      id: rows.length + 1, // ID qatorlar soniga asoslanadi
      period: "",
      organization: "",
      department: "",
      position: "",
    };
    setRows([...rows, newRow]); // Eski ma'lumotlarga yangi qatorni qo'shish
  };

  return (
    <div className="work-experience">
      <h3>Mehnat faoliyati</h3>
      <table className="work-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Ishlash davri</th>
            <th>Tashkilot nomi</th>
            <th>Bo'lim</th>
            <th>Lavozimi</th>
          </tr>
        </thead>
        <tbody>
          {/* Har bir qatorni dinamik ravishda chiqarish */}
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={row.period}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].period = e.target.value;
                    setRows(updatedRows);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.organization}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].organization = e.target.value;
                    setRows(updatedRows);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.department}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].department = e.target.value;
                    setRows(updatedRows);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.position}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].position = e.target.value;
                    setRows(updatedRows);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="add-row-btn" onClick={addRow}>+</button>
    </div>
  );
};

export default WorkExperienceTable;
