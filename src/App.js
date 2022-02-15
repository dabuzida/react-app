// import logo from './logo.svg';
import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import CreateContent from "./components/CreateContent";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
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
  render() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      let ans = this.state.contents.filter(
        (e) => e.id === this.state.selected_content_id
      )[0];
      _title = ans.title;
      _desc = ans.desc;
      _article = <ReadContent title={_title} desc={_desc} />;

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
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id++;
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
            });
          }.bind(this)}
        />
      );
    }
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
            this.setState({
              mode,
            });
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
        {_article}
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
