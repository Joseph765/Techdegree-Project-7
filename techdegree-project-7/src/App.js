import React, {Component} from 'react';
import './App.css';
import './css/index.css';
import apiKey from './config.js';
import Header from './Header';
import Photo from './Photo.js';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NotFound from './NotFound';

class App extends Component {

  state = {
     photos: []
  }

  componentDidMount() {
    this.onSearch();
  }

  onSearch(search = 'cats') {

    this.setState({
      photos: []
    });

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          photos: responseData.photos
        })
      })

  }

  render () {
      return (
        <BrowserRouter>
          <div className="App">
              <Route path={'/'} render={() => <Header onSearch={this.onSearch.bind(this)}/> } />
              <Switch>
                <Route exact path="/" render={ () => <Redirect to="/cats" />} />
                <Route exact path="/cats" render={ () => <Photo data={this.state.photos}/> } />
                <Route exact path="/dogs" render={ () => <Photo data={this.state.photos}/> } />
                <Route exact path="/birds" render={ () => <Photo data={this.state.photos}/> } />
                <Route component={NotFound} />
              </Switch>
          </div>
        </BrowserRouter>
      );
    }
}


export default App;
