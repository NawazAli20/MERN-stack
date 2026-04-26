import { useParams } from "react-router-dom";
import students from './studentsDb.js'; 

function StudentDetails(){
    const {id} = useParams(); 
    console.log("Student ID: "+id);
    let student = null; 
    if(id){
        student = students.find(student=>
            student._id == id
        )

    }
    return(
        <>
         <h2>Student Details:</h2>
         {student? 
                <>
                    <div className="details">
                        <p>ID: {student._id}</p>
                        <p>Name: {student.name}</p>
                        <p>GPA: {student.gpa}</p>
                        <p>Total Credit: {student.tot_credit}</p>
                        <p>Department: {student.department}</p>
                    </div>
                </>
                :
                <p>No student with ID {id} is found</p>    
            }
        </>
    );
}
export default StudentDetails;