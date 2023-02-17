import React, { Component } from 'react';
import './Navbar.css';
import Modal from '../Components/Modal';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  
  render() {
    return (
      <nav>
        <div>
          <span>rental</span>
        </div>
        <div>
          <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><Link className='active' to="/">Home</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/book">Book Now</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <Modal/>
        </div>

        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

      </nav>
    );
  }
}

export default Navbar;