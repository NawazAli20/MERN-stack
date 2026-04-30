
import {Link} from 'react-router-dom';

export function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/students" target='_self'>Students</Link>
                    </li>
                     <li>
                        <Link to="/students/add" target='_self'>Add a Student</Link>
                    </li>
                      <li>
                        <Link to="/students/search" target='_self'>Search Student(s)</Link>
                    </li>
                    <li>
                        <Link to="/students" target='_self'>Delete Student(s)</Link>
                    </li>
                    {/* <li>
                        <Link to="/students/:id" target='_self'>Search</Link>
                    </li> */}
                </ul>
            </nav>
        </>
    )
}

function Home(){
    return(
        <>
            <h2>Happy to be Home!!</h2>
        </>
    )
}

export default Home; 