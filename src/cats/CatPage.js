import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCats } from '../utils/cats-api.js';

export default class CatPage extends Component {
    state = {
      cats: []
    }

    async componentDidMount() {
      const cats = await getCats();
      if (cats) {
        this.setState({ cats: cats });
      }
      else {
        console.log('404 on the gatos. Check network tab');
      } 
    }

    render() {
      const { cats } = this.state;
      return (
        <div className="CatPage">
          <h2>Here are the cats you requested</h2>
            
                
        </div>
      );
    }
}
