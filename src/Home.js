import React from 'react'
import Posts from './Posts'
import Header from './Header'
import Profileinfo from './Profileinfo'


const Home = () => {
  return (
    // <h1>Test</h1>
    <div className="App">
    <Header/>
    <Profileinfo/>
    <Posts/>
    
    </div>
  )
}

export default Home