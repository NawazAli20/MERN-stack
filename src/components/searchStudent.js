import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getStudents } from "./apiFunctions";
import { useState } from "react";
import { useEffect } from "react";

function SearchStudent(){
    const [searchParams, setSearchParams] = useSearchParams({"stdname":''});
    const [students, setStudents] = useState([]);
    const [searchedStudents, setSearchedStudents] = useState([]);
    
     // Fetch students once
    useEffect(() => {
        async function fetchStudents() {
            const data = await getStudents();
            setStudents(data);
        }
        fetchStudents();
    }, []);

    // Filter when search text or students change
    useEffect(() => {
        const searchText = searchParams.get("stdname")?.toLowerCase() || "";

        const filtered = students.filter(student =>
            student.name.toLowerCase().includes(searchText)
        );

        setSearchedStudents(filtered);
    }, [searchParams, students])

    return(
        <>
            <h1>Search student(s)</h1>
            <form>
                <label htmlFor="search">Student(s) name:</label>
                <input tye="text" name="name" id="name"
                onChange={e=>setSearchParams({stdname:e.target.value})}
                placeholder="John Doe"
                />
            </form>
            {searchedStudents.length>0 &&
            
            <ol>
                {searchedStudents.map(student =>
                    <li key={student._id}><Link to={`/students/${student._id}`}>{student.name}</Link></li>
                )}
            </ol>
            
            }
        </>
    );
}
export default SearchStudent; 