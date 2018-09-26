import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link} from 'react-router-dom';
import Forms from './components/Forms.js';
import Restaurants from './components/Restaurants.js';

const key = 'e0717b27b8be4f14bca92e2a07a33b8d';

const headers = {
	'Accept':'application/josn',
	'user-key':key
}

// https://developers.zomato.com/api/v2.1/search?entity_id=3&entity_type=city
class App extends Component {
	
	constructor(props) {
		super(props);
		// Please set states only in constructor! It helps readability.
		this.state = {
			restaurants: null,
		}
	}
	
	getData = async (e) => {
		e.preventDefault();
		const apicall = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=3&entity_type=city`,
			{
				method:'GET',
				headers,
			}
		);
		// Get the response.
		const response = await apicall.json();
		// Extract the array.
		const restaurants = response.restaurants;
		// Update state.
		this.setState ({
			restaurants
		});
	}
	
	render() {
		return (<div className="App">
		<header>
		<h1 >Welcome to Zomato</h1>
		</header>
		
		<Forms getdata={this.getData} />
			{/* Render only if state exists. */}
			{this.state.restaurants && <Restaurants restaurants={this.state.restaurants} />}	
		</div>
		);
	}
}

export default App;
