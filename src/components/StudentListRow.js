import Axios from "axios";
import {Link} from 'react-router-dom'

function StudentListRow(props)
{
    const handleDelete = ()=>{
        Axios.delete('https://crud-backend-gi6h.onrender.com/delete-student/'  + props.obj._id )
        .then((res)=>{
            if(res.status === 200){
                alert("record Successfully Deleted");
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    }
    
    return(
        <tr>
            <td> {props.obj.name} </td>
            <td> {props.obj.email} </td>
            <td> {props.obj.rollNo} </td>
            <td className="d-flex justify-content-center">
                <button className="btn btn-success me-3">
                    <Link to={'/edit-student/' + props.obj._id} class="text-decoration-none text-light">Edit</Link>
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>delete</button>
            </td>
        </tr>
    )
}

export default StudentListRow;