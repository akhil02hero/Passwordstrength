import React, { Component } from 'react';
import './App.css'
import Card from './Card'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      length: 0,
      value: "",
      bgcolors: "",
      message: "",

    }
  }

  render() {
    const symbolandnumbers = ['@', '!', '#', '$', '%', '^', '&', '*', '(', ')', '-', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // const symbol = "@";
    const checkstrength = (len, val) => {
      console.log(len, val)

    }

    const checkbasic = (event) => {
      if (event.length < 4) {
        this.setState({ length: 0, message: "" });
      }
      else if ((event.length === 4) && (event.length < 8)) {
        this.setState({ length: 1, bgcolors: "red", message: "Very Easy" });
      }
      else if ((event.length === 8) && (event.length < 12)) {
        this.setState({ length: 2, bgcolors: "orange", message: "Easy" });
      }
      else if ((event.length === 12) && (event.length < 16)) {
        this.setState({ length: 3, bgcolors: "yellow", message: "Good" });
      }
      else if (event.length === 16) {
        this.setState({ length: 4, bgcolors: "green", message: "Better" });
      }
    }

    const checksymbols = (event) => {
      var condition = symbolandnumbers.some(el => event.includes(el));
      if (condition && event.length === 8) {
        this.setState({ length: 3, bgcolors: "yellow", message: "Good" });
      }
      else if (condition && event.length === 12) {
        this.setState({ length: 4, bgcolors: "green", message: "Better" });
      }
    }


    const getdata = (event) => {
      this.setState({ value: event })
      checkbasic(event);
      checksymbols(event);
    }
    checkstrength(this.state.length, this.state.value);
    const style = () => ({
      width: `${(this.state.length) * 100 / 4}%`,
      height: '10px',
      background: `${this.state.bgcolors}`,
      borderRadius: '50px',
    })
    return (

      <div>
        <div className="InputBox">
          <input type="password" className="inp" name="password" onChange={(e) => getdata(e.target.value)} />



          {/* </div> */}
          {/* <div className="">{this.state.message}</div> */}
          <Card lenth={this.state.length} message={this.state.message} style={style()} txtcolor={this.state.bgcolors} />


        </div>

      </div >
    )
  }
}
