import React, { Component } from 'react';

class Restaurants extends Component{
  render(){
    let restaurants = this.props.restaurants;
    console.log(restaurants);

    return(
      <div>
        The array is
        <ul>
          {restaurants.map(e => <li>{e.restaurant.name}</li>)}  
        </ul>
      </div>
    );
  }
}

 export default Restaurants;
