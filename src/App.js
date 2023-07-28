

import { Route, Routes } from 'react-router-dom';
import Reels from './Reels';
import Home from './Home'
import Signin from './Signin'


function App() {

  
  return (
    <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/reels' element={<Reels/>} />
    <Route path='/signin' element={<Signin/>} />
  </Routes>
  
  );
}

export default App;
