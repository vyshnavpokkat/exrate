import React from 'react'
import './formstyle.css'
import { useState } from 'react'
import validator from 'validator';
import Dashboard from './Dashboard';
import { Link } from "react-router-dom";
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

export default function LogForm() {
    const navigate=useNavigate()
    const [data, setData] = useState({
        Name: "",
        Mail: ""
    })
    const strData = (event) => {

        console.log("EVENT==>", event.target.value)
        // const {key ,value}=event.target;
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })

        console.log("data==>", data);


    }
    console.log("Name===>", data.Name)
    console.log("Mail===>", data.Mail)
    const validM=data.Mail;
    console.log(validator.isEmail(validM))  // true
    const validStr=validator.isEmail(validM)
    const validCheck=(e)=>{ 
        e.preventDefault()
       
    }

    
    const subM=()=>{
        if(validStr==true){
            
            console.log("Successs");
            navigate('/Dashboard')
            
            
        }
        else{
            console.log("Invalid Email")
        }

    }
    

    return (
        <>
            <div className="background" />
            <div className="card">
                <h2 id='headText'>Exchange Rate Board</h2>
                <form className="form" onSubmit={validCheck}>
                    <input type="text" placeholder="Name" name='Name' required onChange={strData} />
                    <input type="email" placeholder="Email" name='Mail' onChange={strData} />
                    <button type="submit" onClick={subM}>GET RATE</button>
                </form>
               
            </div>
        </>
    )
}
