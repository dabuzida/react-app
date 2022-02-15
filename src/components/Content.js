import React, { Component } from 'react';
class Content extends Component{
    render(){
      console.log("Content render");
      return (
        <article>
            <h4 style={{"color": "green", "margin": 0}}>결과창</h4>
            <h2 style={{"margin": 0}}>{this.props.title}</h2>
            {this.props.desc}
        </article>
      );
    }
  }
  export default Content;
