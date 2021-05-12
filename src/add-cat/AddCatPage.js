import React, { Component } from 'react';
import CatForm from '../common/CatForm.js';
import { addCat } from '../utils/cats-api.js';

export default class AddCatPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async catBeingAdded => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      
      const newCat = await addCat(catBeingAdded);

      history.push(`/cats/${newCat.id}`);
    }

    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {
    return (
      <div className="AddCatPage">
        <h2>Add a Cat</h2>
        <CatForm onSubmit={this.handleAdd}/>
                
      </div>
    );
  }
}
