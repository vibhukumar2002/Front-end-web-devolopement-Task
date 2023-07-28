import React from 'react'

const Showcards = ({pic}) => {
  return (
    <div className='cardcontainer'>
    <button className="close"><big className='closetext'>x</big></button>
 
 <img src={pic}
  alt="aaaa" className="cardimage" />

 <div className="idandname">
    <p className="id">Lorem, ipsum.</p>
    <p className="name">Lorem</p>
 </div>

 <button className='followbutton'>Follow</button>

</div>
  )
}

export default Showcards

//"https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"