import React, { Component } from 'react';
class FEFW extends Component{
    render(){
        console.log("FrontEnd FrameWork render");
        let data = this.props.data;
        console.log(data);
        return (
            <div>
            </div>
        )
    }
}

export default FEFW;
