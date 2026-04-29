import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStudent, updateStudent } from "./apiFunctions";
import { useNavigate } from "react-router-dom";

function UpdateStudent(){
    const {id} = useParams(); 
    const navigate = useNavigate();
   // alert(`student id:${id}`);
    const [inputs, setInputs] = useState({}); 

    async function handleSubmit(event){
        event.preventDefault(); 
        const student= {name:inputs.name,tot_credit:inputs.tot_credit};
        await updateStudent(id,student); 
        navigate("/students");
    }

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputs(prevState=>({...prevState,[name]:value}))
    }

    useEffect(()=>{
        async function loadStudent(){
            const student = await getStudent(id); 
            setInputs(student);
        }
        loadStudent();
    },[id]);
    return(
        <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"
                    value={inputs.name || ''}
                    onChange={handleChange}
                    placeholder={inputs.name}/>
                
                    <label htmlFor="tot_credit">Total Credit:</label>
                    <input type="number" name="tot_credit" id="tot_credit"
                    onChange={handleChange}
                    value={inputs.tot_credit || ''}
                    placeholder={inputs.tot_credit}/>
                    <button type="submit">Update</button>

            </form>
        </>
    )
}

export default UpdateStudent;