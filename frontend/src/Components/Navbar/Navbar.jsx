import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <img 
        src={nav_dropdown} 
        alt="dropdown" 
        className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
        onClick={() => setDropdownOpen(!dropdownOpen)} 
      />
      <ul className={`nav-menu ${dropdownOpen ? 'nav-menu-visible' : ''}`}>
        <li onClick={() => { setMenu("shop"); setDropdownOpen(false); }}>
          <Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens"); setDropdownOpen(false); }}>
          <Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens"); setDropdownOpen(false); }}>
          <Link to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); setDropdownOpen(false); }}>
          <Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
