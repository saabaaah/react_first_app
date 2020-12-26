import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import Contacts from './components/contact/Contacts';
import {Provider, Consumer} from './components/context';

// importer css
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  // methode render :
  render(){

    /// données 
    let data = "prostam";
    return (
      <Provider className="App">
        <Navbar titre="Contact-list"/>
        <Contacts/>

      </Provider>
    );
  }
}

export default App;
