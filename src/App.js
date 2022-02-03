// import logo from './logo.svg';
import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
import PenList from './components/PenList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      selected_content_id: 1,
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTMtL is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScirpt', desc:'JavaScirpt is for interactive'}
      ],
      pen:[
        {id:1, brand:'sharp', madeIn:'Japan'},
        {id:2, brand:'monami', madeIn:'Korea'},
        {id:3, brand:'pentel', madeIn:'Japan'},
      ],
    }
        
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      
      let ans = this.state.contents.filter(e => e.id === this.state.selected_content_id)[0];
      _title = ans.title;
      _desc =  ans.desc;
      // let i=0;
      // while(i < this.state.contents.length){
      //   let data = this.state.contents[i];
      //   if(data.id === this.state.selected_content_id){
      //     _title = data.title;
      //     _desc = data.desc;
      //     break;
      //   }
      //   i = i + 1;
      // }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onNewEvent={function(){
            this.setState({
              mode:'welcome',
            })
          }.bind(this)
        }
        />
        <TOC 
          onNewEvent={function(id){
            this.setState({
              mode:'read',
              selected_content_id: +id,
            })
          }.bind(this)}
          data={this.state.contents} />
        <Content title={_title} desc={_desc} />
        <PenList
          data={this.state.pen}
          myEvent={function(){

          }}
          
        ></PenList>
    </div>
    )
  }
}

export default App;

// {/* <header className="App-header">
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
//       </header> */}

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