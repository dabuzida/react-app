import React, { Component } from 'react';
class TOC extends Component{
    render(){
      console.log("TOC render");
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i <data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onNewEvent(e.target.dataset.id);
              }.bind(this)}  
            >
              {data[i].title}
            </a>
          </li>)
        i = i + 1;
      }
      console.log(lists);
      return (
        <nav>
          <h4 style={{"color": "green", "margin": 0}}>읽을목록</h4>
            <ul style={{"margin":0}}>
                {lists} 
                {/*  lists는  [ <li> ... </li> ] 식인데 같은결과
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li> */}
            </ul>
        </nav>
      );
    }
  }

  export default TOC;