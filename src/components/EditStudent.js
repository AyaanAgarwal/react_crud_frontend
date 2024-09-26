import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm"
import { useEffect, useState } from "react";
import Axios from 'axios';

function EditStudent()
{
    const {id} = useParams();
    const [initialValue , setInitialValue] = useState({name : "" , email: "" , rollNo : ""});
    
    const [newData , setNewdata] = useState([]);
    
    useEffect(()=>{
        Axios.get('https://crud-backend-gi6h.onrender.com/update-student/' + id )
        .then((res)=>{
            if(res.status === 200)
            {
                const {name , email , rollNo} = res.data;
                setInitialValue({name , email , rollNo});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{console.log(err)});
        
    } ,[id])

    const getData  = (chlidData) =>{
        setNewdata(chlidData);
    }

    const handleSubmit =()=>{
        const data = {name : newData[0] , email : newData[1] , rollNo : newData[2]};
        Axios.put('https://crud-backend-gi6h.onrender.com/update-student/' + id , data )
        .then((res)=>{
            if(res.status === 200)
            {
                alert("record updated successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{console.log(err)})
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getData={getData} nameValue={initialValue.name} emailValue={initialValue.email} rollNoValue={initialValue.rollNo} >
                Update Student
            </StudentForm>
        </form>
    )
}

export default EditStudent;


