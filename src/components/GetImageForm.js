import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay.js';


const API_KEY = 'rnQYIMnMebMl05nAJn4lFkwI2yG5n8JkWWi5BKcP';

class GetImageForm extends Component{
  constructor(props){
    super(props)

    //Default state to a page that has photos
    this.state = {
      rover: 'Curiosity',
      camera: 'fhaz',
      sol: '1000',
      images: [
        {id: 'test'}
      ]
      }
    }

  // Gets the photos based on the state
  fetchRoverImages = () => {

    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${API_KEY}`;

    fetch(URL).then((result) => {
      result.json()
      .then((response) => {
        console.log('response', response.photos);
        this.setState({images: response.photos})
      })
    })
  }


  // Below will fire the image search each time the inputs are changed
  handleRover = (e) => {
    console.log('handleRover');
    this.setState({rover: e.target.value})
    this.fetchRoverImages();
  }

  handleCamera = (e) => {
    console.log('camera');
    this.setState({camera: e.target.value})
    this.fetchRoverImages();
  }

  handleSol = (e) => {
    console.log('sol');
    this.setState({sol: e.target.value})
    this.fetchRoverImages();
  }

  componentWillMount = () => {
    this.fetchRoverImages();
  }


  render(){

    let images = this.state.images.map((image, index) => {
      return (
        <div key={image.id}>
          <img className='col-md-6 each-image' src={image.img_src} alt='Failed to Load'></img>
          {/* <h1 className='col-md-6'>{image.earth_date}</h1> */}
        </div>

      );
    });

    return(
      <div className='main-content-area'>

        <div className='col-md-6 col-md-offset-5 search-area well'>
          <label htmlFor="rover">Rover</label>
            <select className='form-control' onChange={this.handleRover} id="rover" value={this.state.rover}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
            <label htmlFor="camera">Camera Type</label>
            <select className='form-control' onChange={this.handleCamera} id="rover" value={this.state.camera}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input className='form-control' type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
        </div>

        <div className='col-md-10 col-md-offset-1 image-area'>
          <ImageDisplay images={images} />
        </div>

      </div>
    )
  }
}

export default GetImageForm;
