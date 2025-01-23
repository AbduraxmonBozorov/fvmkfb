import React, { useState } from "react";
import "./WorkExperienceTable.css";

const WorkExperienceTable = ({ workExperiences, setworkExperiences }) => {
  // Yangi qator qo'shadigan funksiya
  const addRow = () => {
    const newRow = {
      id: workExperiences.length + 1, // ID qatorlar soniga asoslanadi
      period: "",
      organization: "",
      department: "",
      position: "",
    };
    setworkExperiences([...workExperiences, newRow]); // Eski ma'lumotlarga yangi qatorni qo'shish
  };

  // Ma'lumotni o'zgartirish funksiyasi
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...workExperiences];
    updatedRows[index][field] = value; // To'g'ri indeksni va maydonni yangilash
    setworkExperiences(updatedRows);
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
          {workExperiences.map((work, index) => (
            <tr key={work.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={work.period}
                  onChange={(e) =>
                    handleInputChange(index, "period", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={work.organization}
                  onChange={(e) =>
                    handleInputChange(index, "organization", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={work.department}
                  onChange={(e) =>
                    handleInputChange(index, "department", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={work.position}
                  onChange={(e) =>
                    handleInputChange(index, "position", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="add-row-btn" onClick={addRow}>
        +
      </button>
    </div>
  );
};

export default WorkExperienceTable;
