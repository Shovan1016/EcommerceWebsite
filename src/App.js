
// import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from "./index_component/navbar";
import NavMenu from "./index_component/nav_menu";
import Home from "./index_component/home";
import Footer from "./index_component/footer";
import BackToTop from "./index_component/backToTop";
import Mobile from "./shopping_component/mobile";
import BestSeller from "./shopping_component/BestSeller";
import TodayDeal from "./shopping_component/todayDeal";
import SignIn from './account/signIn.js';
import LogIn from "./account/logIn";
import Order from "./shopping_component/order";
import Cart from "./shopping_component/cart";



function App() {
  return (
    <div className="App">
      <NavBar />
      <NavMenu />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="mobile" element={<Mobile />} />
      <Route path="bestSeller" element={<BestSeller />}/>
      <Route path="todayDeal" element={<TodayDeal />}/>
      <Route path="signIn" element={<SignIn/>}/>
      <Route path="logIn" element={<LogIn/>}/>
      <Route path="order" element={<Order/>}/>
      <Route path="cart" element={<Cart/>}/>
      
      
    </Routes>
      <BackToTop/>
     <Footer/>
    </div>
  );
}

export default App;
