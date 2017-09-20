import React, { Component } from 'react';

class GetImageDisplay extends Component{
  render(){

    return(
      <div className='row'>
        {this.props.images}
      </div>
    )
  }
}

export default GetImageDisplay;
