import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import "./App.css";

function App() {
  const [view, setView] = useState("dashboard");

  return (
    <>
      {view === "dashboard" && <Dashboard setView={setView} />}
      {view === "add" && <AddPatient setView={setView} />}
    </>
  );
}

export default App;
