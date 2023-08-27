import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export const ManageDashboard = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate()
  function event(e) {
    let name=e.target.name
    setData({...data,[name]:e.target.value})
  }
  const submit = async(e)=>
  {
    e.preventDefault()
    const {Fname,Lname,Age,Symptoms,Abha}=data
    const res = await fetch("http://localhost:5001/AddPaitent", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Fname,Lname,Age,Symptoms,Abha})
		})
  }
  return (
    <div className='center'>
      <form className='center2' onSubmit={submit}>
        FirtName : 
        <br></br>
        <input type='text' name="Fname" onChange={event}></input>
        LastName : 
        <br></br>
        <input type='text' name="Lname" onChange={event}></input>
        Age : 
        <br></br>
        <input type='text' name="Age" onChange={event}></input>
        Enter Symptoms : 
        <input type='text' name="Symptoms" onChange={event}></input>
        <br></br>
        Abha Number : 
        <input type='text' name="Abha" onChange={event}></input>
        <br></br>
        <input type='submit' value="Add Paitent To Data Base"></input>
        
      </form>
      {JSON.stringify(data)}
    </div>
  )
}
