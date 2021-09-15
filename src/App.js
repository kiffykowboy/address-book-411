import React, { Component } from "react";
import { Users } from "./Users"

console.clear();

const URL = "https://randomuser.me/api?results=25"

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: [],
      isHidden: false
    }
  }

  async componentDidMount(){
    let response = await fetch(URL);
    let json = await response.json();
    let { results } = json;

    this.setState({
      users: results
    });
  }


  render() {
  
    return( 
        <ol className="App">
            <Users people={this.state.users} isHidden={this.state.isHidden}/>
         </ol>
    );
  }
  }
  
  