import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Home from "./Home";
import Table from "./Table";


class Records extends Component {
  state = {
    data: []
  };

  render() {
    return (  
       
      <MuiThemeProvider>
        <div className="App">

          <Home
            onSubmit={submission =>
              this.setState({
                data: [this.state.data, submission]
              })}
          />
          <Table
            data={this.state.data}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
             
              {
                name: "Email",
                prop: "email"
              },
              {
                name: "Password",
                prop: "password"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    
    );
  }
}

export default Records;




