import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link} from 'react-router-dom';
import Forms from './Components/Forms.js';
import Restaurants from './Components/Restaurants.js';

const key='e0717b27b8be4f14bca92e2a07a33b8d';
const headers = {
  'Accept':'application/josn',
  'user-key':key
}

//https://developers.zomato.com/api/v2.1/search?entity_id=3&entity_type=city
class App extends Component {

  this={
    restaurant:[]
  }

  getdata = async (e) => {
    e.preventDefault();
    const apicall = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=3&entity_type=city`,{
      method:'GET',
      headers
    });

    const res = await apicall.json();
    this.setState({
      restaurant:res
    });

  }



  render() {


    return (
      <div className="App">
        <header >

          <h1 >Welcome to Zomato</h1>
        </header>
        <Forms getdata={this.getdata} />
      <Restaurants
        restaurant={this.state}
      />

      </div>
    )
  }
}

export default App;
