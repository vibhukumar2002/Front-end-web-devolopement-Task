import React from 'react'
import Reelesimages from './Reelsimages'
import Showpic from './Showpic'
import Postsheader from './Postsheader'
import Poastsfooter from './Poastsfooter'
import './Reelspoasts.css'

const Reelspoasts = () => {
    let res=Reelesimages.map((i)=>{
        return(<Showpic picpath={i}/>)
       })
  return (
    <div className="containeer">
        <Postsheader/>
    <div className='postscontentcontainer'>
        {res}
        {res}
        
       </div>
       <Poastsfooter/>
       </div>
  )
}

export default Reelspoasts