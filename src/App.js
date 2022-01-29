// import logo from './logo.svg';
import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:"WEB", sub:"world wide web!"}
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
        />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
