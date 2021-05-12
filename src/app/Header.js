import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Famous Cats</h1>
        <nav>
          <NavLink to="/" exact={true}>Go Back Home</NavLink>
          <br></br>
          <NavLink to="/cats" exact={true}>All Cats</NavLink>
          <br></br>
          <NavLink to='/cats/add' exact={true}>Add a Cat</NavLink>
        </nav>
      </header>
    );
  }

}
 
export default Header;