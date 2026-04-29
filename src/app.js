import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './components/addStudent.js';
import UpdateStudent from './components/updateStudent.js';
import Home, { Navbar } from './home.js';
import StudentDetails from './studentDetails.js';
import Students from './students.js';


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
                    <Route path="/students/update/:id" element={<UpdateStudent/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default App;