import React, { Component } from 'react';

import './EpicMenu.css';

import cimage from './images/image.png';

class EpicMenu extends Component {
  render() {

    let linksMarkup = this.props.links.map((link, index) => {

      return (

        < li className = "menu__list-item" > <a className="menu__link" href={link.link}>{link.label}</a></li >
        
  
      );
    });

  return(
  <nav className = "menu" >
      <h1 style={{
        backgroundImage: 'url(' + cimage + ')'
      }} className="menu__logo"></h1>

      <div className="menu__right">
        <ul className="menu__list">
          {linksMarkup}
        </ul>
      </div>
  </nav>

    );
  }
}

export default EpicMenu;