import students from './studentsDb.js'; 
import { Link, useParams } from 'react-router-dom';

function Students(){
    const id = useParams(); 
    console.log("Student ID: "+id);
    let student = null; 
    if(id){
        student = students.find(student=>
            student._id == id
        )

    }
    return(
        <>
        <h1>Students Information</h1>
           <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>GPA</th>
                {/* <th>Total Credit</th>
                <th>Department</th> */}
            </tr>
            </thead>
            <tbody>
           { 
           students.map(student=>
                <tr key={student._id}>
                    <td>{student._id}</td> 
                    <td><Link to={student._id.toString()}>{student.name}</Link></td>
                    <td>{student.gpa}</td>
                    {/* <td>{student.tot_credit}</td>
                    <td>{student.department}</td> */}
                </tr>
            )}
            </tbody>
            </table>
            
            {student && <>
                
                <p>Name:{student._id}</p>
                <p>Name:{student.name}</p>
                <p>GPA: {student.gpa}</p>
                <p>Name:{student.tot_credit}</p>
                <p>Department: {student.department}</p>
                </>}

        </>
    )
}

export default Students;