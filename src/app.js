import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home.js';
import Students from './students.js'; 
import StudentDetails from './studentDetails.js'; 
import { Navbar } from './home.js';


function App(){
    return(
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/students" element={<Students/>}/>
                    <Route path="/students/:id" element={<StudentDetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App;