import axios from "axios";
import { useState } from "react";

export default function AddPatient({ setView }) {
  const [patientName, setPatientName] = useState("");
  const [doctorAssigned, setDoctorAssigned] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const API_URL = "https://clinic-backend-se02.onrender.com/api/v1/patient";

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL, {
        patientName,
        doctorAssigned,
        diagnosis,
      });

      setView("dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page-container">
      <button className="blue-btn" onClick={() => setView("dashboard")}>
        Show Patient Board
      </button>

      <h1>Patient Intake</h1>
      <h3>Create new patient record</h3>

      <form className="form-box" onSubmit={submit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Assigned Doctor"
          value={doctorAssigned}
          onChange={(e) => setDoctorAssigned(e.target.value)}
        />

        <textarea
          placeholder="Diagnosis / Notes"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        ></textarea>

        <button className="blue-btn submit-btn">Submit Record</button>
      </form>
    </div>
  );
}
