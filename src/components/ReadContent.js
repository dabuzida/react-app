import React, { Component } from 'react';
class ReadContent extends Component{
    render(){
      console.log("ReadContent render");
      return (
        <article>
            <h4 style={{"color": "green", "margin": 0}}>Read</h4>
            <h2 style={{"margin": 0}}>{this.props.title}</h2>
            {this.props.desc}
        </article>
      );
    }
  }
  export default ReadContent;
