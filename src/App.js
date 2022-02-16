// import logo from './logo.svg';
import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      subject: { title: "WEB", sub: "world wide web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTMtL is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScirpt", desc: "JavaScirpt is for interactive" },
      ],
    };
  }
  getReadContent(){
    let data = this.state.contents.filter(
      (e) => e.id === this.state.selected_content_id
    )[0];
    return data;
  }
  getContent(){
    let _title = null;
    let _desc = null;
    let _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id++;
            let _contents = Array.from(this.state.contents);
            _contents.push({id: this.max_content_id, title: _title, desc: _desc});
            
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            let _contents = Array.from(this.state.contents);
            for(let key in  _contents){
              if(_contents[key].id === _id){
                _contents[key] = {id: _id, title: _title, desc: _desc,}
                break;
              }
            }
            this.setState({
              contents: _contents,
              mode: 'read',
            });
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  render() {
    console.log("App.js render");
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onNewEvent={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        />
        <div style={{ color: "red", margin: 0 }}>
          현재모드: {this.state.mode}
        </div>
        <Control
          onChangeMode={function (mode) {
            if(mode === 'delete'){
              let _contents;
              if(window.confirm('really?')){
                _contents = this.state.contents.filter
                (e => e.id !== this.state.selected_content_id);
                this.setState({
                  mode:'welcome',
                  contents: _contents,
                });
                setTimeout(function(){alert("deleted!!!")}, 500);
              }
            } else{
              this.setState({
                mode,
              })
            }
          }.bind(this)}
        />
        <TOC
          onNewEvent={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: +id,
            });
          }.bind(this)}
          data={this.state.contents}
        />
        <hr style={{ color: "black" }}></hr>
        <div style={{ color: "green" }}>결과창</div>
        {this.getContent()}
      </div>
    );
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
