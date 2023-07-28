import React from 'react'
import './Showpic.css'

const Showpic = ({picpath}) => {
    console.log(picpath)
    
  return (
    
        <div >
                         <img src={picpath}
                          alt="imageofappp"
                         className='contentimage' />
    </div>
  )
}

export default Showpic
//https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"