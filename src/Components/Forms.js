import React, { Component } from 'react';

class Forms extends Component{
  render(){
    return(
      <div>
      <form onSubmit={this.props.getdata}>
      <input type="text" name="search" placeholder="search" />
      <button>Submit</button>
      </form>
      </div>
    )
  }
}
export default Forms;
