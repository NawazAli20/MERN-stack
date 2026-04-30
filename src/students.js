import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);
  const apiEndPoint = "http://localhost:3000/api/students"; 

  useEffect(() => {
    getStudents();
  }, []);

    async function getStudents() {
      const response = await fetch(apiEndPoint,{method:"GET"});
        const data = await response.json();
      setStudents(data);
    }

    async function deleteAStudent(id){
        const response = await fetch(`${apiEndPoint}/${id}`,{method:"DELETE"});
        if(response.ok){
            setStudents(students.filter(student=>student._id!== id));
        }else{
            alert('Delete failed');
        }
    }

  return (
    <>
      <h2>Students Information</h2>

      <table border="1">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Name</th>
            {/* <th>Total Credit</th>
            <th>Department</th> */}
            <th>Details</th> 
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              {/* <td>{student._id}</td> */}
              <td>{student.name}</td>
              {/* <td>{student.tot_credit}</td>
              <td>{student.dept_name}</td> */}
              <td>
                <Link to={`/students/${student._id}`}>View</Link>
              </td>
              <td>
                <button onClick={()=>deleteAStudent(student._id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Students;