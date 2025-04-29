import { useState } from "react";
import AddPatient from "./AddPatient";
import PatientList from "./PatientList";

const App = () => {
    const [patientName, setPatientName] = useState('');
    const [patientAge, setPatientAge] = useState(0);
    const [patientCondition, setPatientCondition] = useState('');
    
    const [patients, setPatients] = useState([
        { name: "Usman Muhammad", age: 67, condition: "Headache" },
        { name: "Fatima Aliyu", age: 37, condition: "Flu" },
        { name: "Ibrahim  Auwal Isa", age: 19, condition: "Ulcer" },
        { name: "Aisha Auwal", age: 10, condition: "Fever" }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleAddPatient = (newPatient) => {
        setPatients([...patients, newPatient]);
    }

    const handlePatientDelete = (index, isIndirectDelete = false) => {
        if(!isIndirectDelete) {
            const confirmDelete = window.confirm("Are your sure you want to delete this patient?");

            if (!confirmDelete) return;
        }

        const updatedPatients = [...patients];
        updatedPatients.splice(index, 1);
        setPatients(updatedPatients);
    }

    const handlePatientEdit = (index) => {
        const patient = patients[index];
        setPatientName(patient.name);
        setPatientAge(patient.age);
        setPatientCondition(patient.condition);
        handlePatientDelete(index, true);
    }

    const filteredPatients = patients.filter((p) => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (<>
        <h1>PATIENT MANAGEMENT SYSTEM</h1>
        <AddPatient onAddPatient={handleAddPatient} patientName={patientName} patientAge={patientAge} patientCondition={patientCondition}  setPatientName={setPatientName}  setPatientAge={setPatientAge}  setPatientCondition={setPatientCondition} />

        <section>
            <h2>Search Patient</h2>
            <input
                type="text"
                placeholder="type name to search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </section>

        {patients.length === 0 ? (
                <p>No patients yet. Please add some.</p>
            ) : filteredPatients.length === 0 ? (
                <p>No matching patinets for "{searchTerm}"</p>
            ) : (
                <PatientList patients={filteredPatients} onEdit={handlePatientEdit}  onDelete={handlePatientDelete}  />
            )
        }

    </>);
}

export default App;