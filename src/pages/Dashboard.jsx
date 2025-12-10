import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Dashboard({ setView }) {
  const [patients, setPatients] = useState([]);

  const API_URL = "http://localhost:3000/api/v1/patient";

  const loadPatients = async () => {
    try {
      const res = await axios.get(API_URL);
      setPatients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      loadPatients();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="page-container">
      <div className="header-row">
        <h1>Clinic Daily Board</h1>
        <button className="blue-btn" onClick={() => setView("add")}>
          + Add New Patient
        </button>
      </div>

      <div className="card-grid">
        {patients.map((p) => (
          <Card key={p._id} patient={p} deletePatient={deletePatient} />
        ))}
      </div>
    </div>
  );
}
