import React from 'react'
import './Poastsheader.css'
import { Link } from 'react-router-dom'

const Postsheader = () => {
  return (
    <div id='poastheadercontainer'>

        <div className="poasttype">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="a" className="poasttypesymbol" />
            <Link to='/' className='postname'>POSTS</Link>
        </div>

        <div className="poasttype">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="a" className="poasttypesymbol" />
            <Link  to='/reels' className='postname'>REELS</Link>
        </div>

        <div className="poasttype">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="a" className="poasttypesymbol" />
            <Link to='/signin' className='postname'>TAGGED</Link>
        </div>
       

    </div>
  )
}

export default Postsheader