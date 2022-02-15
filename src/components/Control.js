import React, { Component } from 'react';

class Control extends Component{
    render(){
      console.log("Control render");
      return (
        <>
            <h4 style={{"color": "green", "margin": 0}}>모드변경</h4>
            <ul style={{"margin":0}}>
              <li>
                  <a
                      href="/create"
                      onClick={function (e) {
                          e.preventDefault();
                          this.props.onChangeMode('create');
                      }.bind(this)}
                  >
                      create
                  </a>
              </li>
              <li>
                  <a
                      href="/update"
                      onClick={function (e) {
                          e.preventDefault();
                          this.props.onChangeMode('update');
                      }.bind(this)}
                  >
                      update
                  </a>
              </li>
              <li>
                  <input
                      value="delete"
                      onClick={function (e) {
                          e.preventDefault();
                          this.props.onChangeMode('delete');
                      }.bind(this)}
                      type="button" />
              </li>
          </ul>
          </>
    );
    }
}

  export default Control;
