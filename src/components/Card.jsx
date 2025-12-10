export default function Card({ patient, deletePatient }) {
  return (
    <div className="card">
      <button className="delete-btn" onClick={() => deletePatient(patient._id)}>
        ✖
      </button>

      <img
        src="https://t4.ftcdn.net/jpg/05/52/06/32/360_F_552063261_m4szrELSEKPhhXQ5ZUqxy44fFsmFDmgK.jpg"
        className="card-img"
      />

      <h2>{patient.patientName}</h2>
      <p><strong>Doctor:</strong> {patient.doctorAssigned}</p>
      <p>{patient.diagnosis}</p>
    </div>
  );
}
