import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>The Page of Famous Cats</h2>

        <Link to='/cats'>Take a look at these cats!</Link>
      </div>
    );
  }

}