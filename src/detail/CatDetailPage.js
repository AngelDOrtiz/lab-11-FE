import React, { Component } from 'react';
import { deleteCat, getCat } from '../utils/cats-api.js';


export default class CatDetailPage extends Component {

    state = {
      cat: null,
      
    }
    async componentDidMount() {
      const { match } = this.props;
      const cat = await getCat(match.params.id);
      if (cat) {
        this.setState({ cat: cat });
      }
      else {
        console.log('No cats here. Check id and network tab');
      }
    }
    //this updates after the delete
    handleDelete = async () => {
      const { cat } = this.state;
      const { history } = this.props;

      const confirmation = `Proceed to unmake ${cat.name}?`;

      //if this window ISNT confirmed, the function will end
      if (!window.confirm(confirmation)) { return; }

      try {
        this.setState({ loading : true });
        await deleteCat(cat.id);
        history.push('/cats');
      }
      catch (err) {
        console.log(err.message);
        this.setState({ loading : false });
      }
    }
    

    render() {
      const { cat } = this.state;

      if (!cat) return null;
      return (
        <div className="CatDetail">
          
          <h2>Cat Detail Page</h2>
          <img src={cat.url} alt={cat.name}/>
          <p>Cat name: {cat.name}</p>
          <p>Cat lives: {cat.lives}</p>
          <p>Cat year: {cat.year}</p>
          <p>Owner: {cat.userName}</p>

          <button className="delete" onClick={this.handleDelete}>Unmake this cat</button>
                
        </div>
      );
    }
}
