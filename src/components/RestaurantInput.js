import React, { Component } from 'react';
// import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import *  as actions from "../actions/restaurants"

export class RestaurantInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '', location: ''
    };
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    // this.props.addRestaurant(this.state);
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addRestaurant: (state)=>dispatch(addRestaurant(state))
//   }

  // {addRestaurant:(this.state)=>{dispatch(addRestaurant(this.state))}}
  // return bindActionCreators({
  //   addRestaurant,
  // }, dispatch);
// };

export const ConnectedRestaurantInput = connect(null, actions)(RestaurantInput);

// export const ConnectedRestaurantInput = connect(null, mapDispatchToProps)(RestaurantInput);
