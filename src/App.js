import React, { Component } from 'react';
import './components/Styles/style.css';
import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
        <div>
            <Header />
            <body>
              <Main />
              <Footer />
            </body>
        </div>
    );
  }
}

export default App;