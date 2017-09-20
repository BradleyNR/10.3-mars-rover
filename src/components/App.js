import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from '../layouts/base.js';
import GetImageForm from './GetImageForm.js';


class App extends Component {
  render() {

    return (
      <BaseLayout>
        <GetImageForm/>
      </BaseLayout>
    );
  }
}

export default App;
