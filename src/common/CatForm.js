import React, { Component } from 'react';
import './CatForm.css';

export default class CatForm extends Component {
    state = {
      name: '',
      type: '',
      lives: 9,
      url: '',
      year: '',
      isSidekick: false
    }

    componentDidMount() {
      
      //this sets the props to the variable "cat"
      const { cat } = this.props;
      if (!cat) { return; }

      //this sets the state to the variable "cat"
      this.setState(cat);
    }

    handleSubmit = e => {
         //this prevents the page from refreshing
      e.preventDefault();
      this.props.onSubmit(this.state);
    }
//All of these are changing the values of the state 
    handleChangeName = ({ target }) => {
      this.setState({ name: target.value });
    }
    
      handleChangeType = ({ target }) => {
        this.setState({ type: target.value });
      }
      
      handleChangeLives = ({ target }) => {
        this.setState({ lives: target.value });
      }
    
      handleChangeUrl = ({ target }) => {
        this.setState({ url: target.value });
      }
    
      handleChangeYear = ({ target }) => {
        this.setState({ year: target.value });
      }
    
      handleChangeIsSidekick = ({ target }) => {
        this.setState({ isSidekick: target.checked });
      }
      render() {
        const { name, type, lives, url, year, isSidekick } = this.state;
        const { cat } = this.props;

        return (
          <form className="CatForm" onSubmit={this.handleSubmit}>
            <p>
              <label>
                <span>Cat Name</span>
                <input name="name" required placeholder="Name of the famous cat..."
                  value={name} onChange={this.handleChangeName} 
                />
              </label>
            </p>
    
            <p>
              <label>
                <span>Cat Type</span>
                <select name="type" required placeholder="Type (tabby, etc.)"
                  value={type} onChange={this.handleChangeType}
                >
                  <option value="" disabled>Type (Tabby, Angora, etc.)</option>
                  <option>Angora</option>
                  <option>Grey Tabby</option>
                  <option>Orange Tabby</option>
                </select>
              </label>
            </p>
    
            <p>
              <label>
                <span>Lives Remaining</span>
                <select name="lives" required
                  value={lives} onChange={this.handleChangeLives}
                >
                  <option>9</option>
                  <option>8</option>
                  <option>7</option>
                  <option>6</option>
                  <option>5</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1</option>
                  <option>0</option>
                </select>
              </label>
            </p>
    
            <p>
              <label>
                <span>Cat Image Url</span>
                <input name="url" required placeholder="Url to image of cat"
                  value={url} onChange={this.handleChangeUrl} 
                />
              </label>
            </p>
    
            <p>
              <label>
                <span>Year of their debut</span>
                <input name="year" required pattern="\d{4}"
                  title="Should be a four digit year like 2021"
                  placeholder="Enter a four-digit year"
                  value={year} onChange={this.handleChangeYear} 
                />
              </label>
            </p>
    
            <p>
              <label>
                <span>Is a Sidekick?</span>
                <span className="vertically-centered">
                  <input name="isSidekick"
                    type="checkbox"
                    value={isSidekick} onChange={this.handleChangeIsSidekick} 
                  /> Yes
                </span>
              </label>
            </p>
    
            <p>
              <button>{cat ? 'Update' : 'Add'} Cat</button>
            </p>
    
          </form>
        );
      }
}
