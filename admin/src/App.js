import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Userlist from './components/pages/userlist/Userlist';
import { User } from './components/user/User';
import { NewUser } from './components/pages/newuser/NewUser';
import { ProductList } from './components/pages/productlist/ProductList';
import Product from './components/product/Product';
import NewProduct from './components/newproduct/NewProduct';
import Login from './components/pages/login/Login';
import { List } from './components/pages/lists/List';
import EditList from './components/list/EditList';
import { NewList } from './components/pages/newlist/NewList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar/>
        
        <div className='container'>
            <Sidebar/> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/users" element={<Userlist/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newuser" element={<NewUser/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newproduct" element={<NewProduct/>}/>
            <Route path="/lists" element={<List/>}/>
            <Route path="/list/:listId" element={<EditList/>}/>
            <Route path="/newlist" element={<NewList/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
