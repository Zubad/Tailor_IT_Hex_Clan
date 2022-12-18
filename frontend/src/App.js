import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Buyer from './pages/buyer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buyer' element={<Buyer/>}/>
        {/* <Route path='/join' element={<JoinForm/>}/> */}
        {/* <Route path='/user' element={<User/>}/>
        <Route path='/gigs' element={<Gigs/>}/>
        <Route path='/create-gig' element={<Creategig/>}/>
        <Route path='/create-gig2' element={<Creategig2/>}/> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
