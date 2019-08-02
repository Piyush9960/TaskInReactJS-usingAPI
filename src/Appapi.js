import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import "./App.css";
import Table from "./Table";

class Appapi extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    }
  }
  componentDidMount(){
    fetch('http://5bb1bc576418d70014071c7e.mockapi.io/modal/list').then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        data:json,
      })
    });
  }
  

  render() {
    var { isLoaded, data } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else{
      return (
      
          <MuiThemeProvider>
            <div className="App">
             
          <center><h2>The Mock-API list</h2></center>
              <Table
                data={this.state.data}
                header={[
                  {
                    name: "id",
                    prop: 'id'
                  },
                  {
                    name: "Name",
                    prop: "name"
                  },
                 
                  {
                    name: "Email",
                    prop: "email"
                  },
                  {
                    name: "Password",
                    prop: "password"
                  },
                 
                  {
                    name: "Hobbies",
                    prop: "hobbies"
                  },
                  {
                    name: "Image Name",
                    prop: 'image'
                    //To see online image,, but for now we would c only name.. 
                  //   prop: <div>
                  //   <img style={{width: 175, height: 175}}
                  //   src={ this.state.data.image } />
                  // </div>
                  }
                ]}
              />
            </div>
          </MuiThemeProvider>
        
      );

      }
    }
  }
    



export default Appapi;