import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
      <footer className="main-footer">
        Made by brainstorm.dev © 2018 - {new Date().getFullYear()}
      </footer>
    )
  }
}

export default Footer;
