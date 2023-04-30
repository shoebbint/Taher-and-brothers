import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Pages/Home/Home/Home';
import About from './Components/Pages/About/About';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Shop from './Components/Pages/Shop/Shop';
import Login from './Components/Shared/Login/Login/Login';
import Register from './Components/Shared/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import AddCategory from './Components/Admin/Categories/Category/AddCategory/AddCategory';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addcategory" element={<AddCategory/>} />
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
