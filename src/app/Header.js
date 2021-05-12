import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Famous Cats</h1>
        <nav>
          <NavLink to="/" exact={true} class="NavLink">Go Back Home</NavLink>
          
          <NavLink to="/cats" exact={true} class="NavLink">All Cats</NavLink>
          
          <NavLink to='/cats/add' exact={true} class="NavLink">Add a Cat</NavLink>
        </nav>
      </header>
    );
  }

}
 
export default Header;