import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [errmsg, setErrmsg] = useState("");

  useEffect(() => {
    async function getStudent() {
      const response = await fetch(`http://localhost:3000/api/students/${id}`);

      if (response.ok) {
        const data = await response.json();
        setStudent(data);
      } else {
        setErrmsg("Student not found");
      }
    }

    getStudent();
  }, [id]);

  return (
    <>
      <h2>Student Details</h2>

      {student ? (
          <>
          <p>ID: {student._id}</p>
          <p>Name: {student.name}</p>
          <p>Total Credit: {student.tot_credit}</p>
          <p>Department: {student.dept_name}</p>
          <p><Link to={`/students/update/${student._id}`} target='_self'>Update</Link></p>
          </>
      ) : (
        <p>{errmsg}</p>
      )}
    </>
  );
}

export default StudentDetails;