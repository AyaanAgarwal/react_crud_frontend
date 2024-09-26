import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from 'axios';

function CreateStudent()
{
    const [arr , setArr] = useState([]);
    const getData = (chlidData)=>{
        setArr(chlidData);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {name : arr[0], email: arr[1], rollNo: arr[2]};
        Axios.post('https://crud-backend-gi6h.onrender.com/create-student' , data)
        .then((res)=>{
            if(res.status === 200){
                alert("data adddd successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=> alert(err))
        event.target.reset();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm getData ={getData}>
                    Create Student
                </ StudentForm>
            </form>
        </div>
    )
}

export default CreateStudent;