
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Service from './Service';
import Gallery from './Gallery';
import Contact from './Contact';
import './Style.css'; 
import Navbar from './Navbar';
import Myform from './MyForm';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/> 
    <Routes> 

      <Route path='/' element={<Home/>} ></Route>
      <Route path='/About' element={<About/>} ></Route>
      <Route path='/Product' element={<Product/>} ></Route>
      <Route path='/Service' element={<Service/>} ></Route>
      <Route path='/Gallery' element={<Gallery/>} ></Route> 
      <Route path='/Contact' element={<Contact/>} ></Route> 
     
    
    </Routes> 
    </BrowserRouter>


    <Myform/>


    </div>
  );
}

export default App;
