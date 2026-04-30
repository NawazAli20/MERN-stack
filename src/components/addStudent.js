import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "./apiFunctions";

function AddStudent(){
    const[inputs, setInputs] = useState({name:'',tot_credit:12});
    const navigate = useNavigate();

    async function handleSubmit(event){
        event.preventDefault(); 
        const student = {name:inputs.name,tot_credit:inputs.tot_credit}
        await addStudent(student);
        navigate("/students"); 
    }

    function handleChange(event){
        const name = event.target.name; 
        const value = event.target.value; 
        setInputs(prevState=>({...prevState,[name]:value}))
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name"
                onChange={handleChange}
                placeholder="John Doe"/>
                <label htmlFor="tot_credit">Total Credit:</label>
                <input type="number" name="tot_credit" id="tot_credit"
                onChange={handleChange}
                placeholder="12"/>
                <button type="submit">Add</button>

            </form>
        </>
    )
}
export default AddStudent;