import React, { Component } from 'react';
class PenList extends Component{
    render(){
        console.log("PenList render");
        return (
            <div>
                <ol>
                    <li>
                        <a 
                        href={"/"}
                        onClick={function(e){
                            e.preventDefault();
                            alert(99);            
                          }}
                        >{this.props.data}</a>
                    </li>
                </ol>
            </div>
        )
    }
}

export default PenList;
