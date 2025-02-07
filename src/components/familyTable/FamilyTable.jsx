import React from "react";
import "./FamilyTable.css";

const FamilyTable = ({ familyMembers, setFamilyMembers }) => {
  // Yangi qator qo‘shish
  const addRow = () => {
    const newRow = {
      id: familyMembers.length + 1,
      family_member: "",
      fullname: "",
      birth_data: "",
      address: "",
      job_address: "",
      grade: "",
    };
    setFamilyMembers([...familyMembers, newRow]);
  };

  // Qatorni tahrirlash
  const handleInputChange = (e, index, field) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][field] = e.target.value;
    setFamilyMembers(updatedMembers);
  };

  // Qatorni o‘chirish
  const deleteRow = (index) => {
    const updatedMembers = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updatedMembers);
  };

  return (
    <div className="family-table">
      <h3>Oila A'zolari</h3>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Oila A'zosi</th>
            <th>Ism-Familiya</th>
            <th>Tug‘ilgan Sana</th>
            <th>Manzil</th>
            <th>Ish Joyi</th>
            <th>Ma'lumoti</th>
            <th>Harakatlar</th>
          </tr>
        </thead>
        <tbody>
          {familyMembers.map((member, index) => (
            <tr key={member.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={member.family_member}
                  onChange={(e) => handleInputChange(e, index, "family_member")}
                  placeholder="Otasi"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={member.fullname}
                  onChange={(e) => handleInputChange(e, index, "fullname")}
                  placeholder="Kamolov Alisher"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={member.birth_data}
                  onChange={(e) => handleInputChange(e, index, "birth_data")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={member.address}
                  onChange={(e) => handleInputChange(e, index, "address")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={member.job_address}
                  onChange={(e) => handleInputChange(e, index, "job_address")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={member.grade}
                  onChange={(e) => handleInputChange(e, index, "grade")}
                />
              </td>
              <td>
                <button onClick={() => deleteRow(index)}>O'chirish</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="add-row-btn" onClick={addRow}>
        Yangi A'zo Qo'shish
      </button>
    </div>
  );
};

export default FamilyTable;
