import React, { useState } from 'react'
import './Header.css'
import Headerbuttons from './Headerbuttons'

const Header = () => {

  //controlled inputs
  let [inputsdata,setinputdata]=useState([{searchbar:""}])
 // console.log(inputsdata)

  let handlechange = (e)=> {
    
      setinputdata(prev=>{
        return(
          {
            ...prev,
            [e.target.name]:e.target.value
          }
        )
      })
  }


  return (
    <div id='headercontainer'>
        <h3  id='appname'>instagram</h3>
        <input type="text"  id='searchbar' name='searchbar' placeholder='Search Instagram' onChange={(e)=>handlechange(e)} value={inputsdata.searchbar}/>
        <Headerbuttons/>
        
    </div>
  )
}

export default Header