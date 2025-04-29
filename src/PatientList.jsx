const PatientList = ({ patients, onEdit, onDelete }) => {

    return (
        <section>
        <h2>PATIENT LIST</h2>
        <table>
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Patient Age</th>
                    <th>Patient Condition</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {patients.map((patient, index) => (
                    <tr key={index} >
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.condition}</td>
                        <td><button className="edit" onClick={() => onEdit(index)} >Edit</button></td>  
                        <td><button className="delete"  onClick={() => onDelete(index)}  >Delete</button></td>
                    </tr>
                ))}
            </tbody> 
        </table>
    </section>
    );
}

export default PatientList