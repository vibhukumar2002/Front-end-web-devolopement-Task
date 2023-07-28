import React from 'react'
import './Cards.css'
import Showcards from './Showcards'
import links from './Imagelinks'

const Cards = () => {

   let result=links.map((i)=>{
      return(<Showcards pic={i}/>)
     })
     

  return (
   <div id="cardrow">
    
    {result}
     
    

   
   </div>

  )
}

export default Cards

