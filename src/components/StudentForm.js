import { useEffect, useState } from "react";

function StudentForm(props)
{
    const [name , setName] = new useState(props.nameValue);
    const [email , setEmail] = new useState(props.emailValue);
    const [rollNo , setRollNo] = new useState(props.rollNoValue);

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNo);
    } , [props.nameValue , props.emailValue , props.rollNo]);

    const arr = [name , email , rollNo];

    const sendData = ()=>{
        props.getData(arr);
    }
    return(
        <div style={{maxWidth : "40%", margin: "0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=> setName(event.target.value)} class="form-control my-3" placeholder="enter your name" />
            <input defaultValue={props.emailValue} onChange={(event)=> setEmail(event.target.value)} class="form-control my-3" placeholder="enter your email" />
            <input defaultValue={props.rollNoValue} onChange={(event)=> setRollNo(event.target.value)} class="form-control my-3" placeholder="enter your roll No" />
            <button onClick={sendData} class="btn btn-success my-3 d-block mx-auto" type="submit" >{props.children}</button>
        </div>
    )
}

export default StudentForm;