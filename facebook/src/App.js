import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import NewsFeed from './Components/NewsFeed';
import LeftNavBar from './LeftNavBar';
import Home from './Components/Home';
import MyPhotos from './Components/MyPhotos';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
        <Header />
        <LeftNavBar />
       
        <Route exact path='/' component={Home}/>
        <Route path='/my newsfeed' component={NewsFeed}/>
        <Route path='/my foto' component={MyPhotos}/>    
        </div>
     </BrowserRouter>
    );
  }
}

export default App;
