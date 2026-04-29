import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home.js';
import Students from './students.js'; 
import StudentDetails from './studentDetails.js'; 
import { Navbar } from './home.js';
import AddStudent from './addStudent.js';


function App(){
    return(
        <>
        <h1>Welcome to Student Page</h1>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/students" element={<Students/>}/>
                    <Route path="/students/:id" element={<StudentDetails/>}/>
                    <Route path="/students/add" element={<AddStudent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App;