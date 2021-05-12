import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import CatPage from '../cats/CatPage';
import CatDetailPage from '../detail/CatDetailPage';
import AddCatPage from '../add-cat/AddCatPage';
import CatEditPage from '../edit-cat/CatEditPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/cats" exact={true}
                render={routerProps => (
                  <CatPage {...routerProps}/>
                )}
              />

              <Route path="/cats/add" exact={true}
                render={routerProps => (
                  <AddCatPage {...routerProps}/>
                )}
                  
              />

              <Route path="/cats/:id"
                render={routerProps => (
                  <CatDetailPage {...routerProps}/>
                )}
              />

              <Route path="/cats/:id/edit" exact={true}
                render={routerProps => (
                  <CatEditPage {...routerProps}/>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
