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
import AddSubCategory from './Components/Admin/SubCategories/SubCategory/AddSubCategory/AddSubCategory';
import AddProduct from './Components/Admin/Products/Product/AddProduct/AddProduct';
import SubCategories from './Components/Pages/Home/Categories/SubCategories/SubCategories';
import Products from './Components/Pages/Shop/Products/Products';
import Cart from './Components/Shared/Cart/Cart';
import Categories from './Components/Admin/Categories/Categories';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/addsubcategory" element={<AddSubCategory />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/subcategories/:categoryId" element={<SubCategories />} />
            <Route path="/products/:subcategoryid" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart2" element={<Categories />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
        <Cart ></Cart>
      </div>

    </div>
  );
}

export default App;
