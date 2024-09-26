import {Link} from 'react-router-dom'
function Nav()
{
    return(
        <div class="navbar bg-warning">
            <Link to="/" style={{fontFamily : "Lobster" , fontSize:"30px"}} class="navbar-brand mx-3">Crud Operation</Link>
            <div class="nav">
                <Link to='/create-student' class='nav-link'>Create Student</Link>
                <Link to='/student-list' class='nav-link'>Student List</Link>
            </div>
        </div>
    )
}

export default Nav;