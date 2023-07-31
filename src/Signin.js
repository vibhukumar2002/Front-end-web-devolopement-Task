import React, { useState } from 'react'
import './Signin.css'

const Signin = () => {
   
  let [data,setdata]=useState([ 
    {
        mail: "",
        pword: ""
    }
  ])

  console.log(data)

  let handlechange=(e)=>
  {
       setdata(prev=>
        {
          return(
            {
              ...prev,
              [e.target.name]:e.target.value
            }
          )
        })
  }



  return (
    <div id="signincontainer">
        <h1 id="logo">INSTAGRAM</h1>

        <div id="inputs">
            <input type="text" className="userinput"  placeholder='phone number,Username,Or EMail' name='mail' onChange={(e)=>handlechange(e)} value={data.mail}/>
            <input type="password" className="userinput" placeholder='Password' name='pword' onChange={(e)=>handlechange(e)} value={data.pword}/>
        </div>

        <button id="login">Log In</button>
    </div>
  )
}

export default Signin