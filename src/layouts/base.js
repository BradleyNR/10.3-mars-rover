import React, { Component } from 'react';

//The HTML in ListLayour is being placed in the props.children
class BaseLayout extends Component{
  render(){
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
