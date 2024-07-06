import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Login from './components/login';
import Register from './components/register';
import Calculator from './components/calculculator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Register/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/calculator' element={<Calculator/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/*' element={<>jgtfyrtrtrtdrtdsrtdrtd</>}></Route>
    </Routes>
   </BrowserRouter>
   <Footer/>
 
  </>
  );
}

export default App;
