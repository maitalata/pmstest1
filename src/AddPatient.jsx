const AddPatient = (props) => {
    

    const handlePatientSubmit = (event) => {
        event.preventDefault();

        props.onAddPatient({ name: props.patientName, age: props.patientAge, condition: props.patientCondition });
        props.setPatientName('');
        props.setPatientAge(0);
        props.setPatientCondition('');
    }

    return (
        <section>
            <h2>PATIENT FORM</h2>
            <form onSubmit={handlePatientSubmit} >
                <span className="formLabel" >Patient Name</span>
                <input type="text" value={props.patientName} onChange={(e) => props.setPatientName(e.target.value)} />
                <span className="formLabel" >Patient Age</span>
                <input type="number" value={props.patientAge} onChange={(e) => props.setPatientAge(e.target.value)} />
                <span className="formLabel" >Patient Condition</span>
                <input type="text" value={props.patientCondition} onChange={(e) => props.setPatientCondition(e.target.value)} />
                <button type="submit" >Submit Patient Data</button>
            </form>
        </section>
    );
}

export default AddPatient