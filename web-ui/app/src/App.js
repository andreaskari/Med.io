import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Menu } from 'semantic-ui-react'

import './css/App.css';

import SideMenu from './SideMenu.js';
import Cases from './Cases.js';
import NewCase from './NewCase.js';

import face from './assets/face.png';
// import logo from './logo.svg';

let NEW_CASE_ACTIVE = 'new case';
let CASES_ACTIVE = 'cases';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: null,
      activeContent: CASES_ACTIVE,
    }
  }

  handleItemClick(name) { 
    this.setState({activeMenuItem: name});
    console.log(this.state.activeMenuItem);
  }

  render() {

    const { activeMenuItem } = this.state || {}

    var appContent = null;
    if (this.state.activeContent == NEW_CASE_ACTIVE) {
      appContent = (
        <NewCase 
          changeCasesToActive={() => { this.setState({activeContent: CASES_ACTIVE}); }}
        />
      );
    } else {
      appContent = (
        <Cases 
          changeNewCaseToActive={() => { this.setState({activeContent: NEW_CASE_ACTIVE}); }}
        />
      );
    }

    return (
      <div id="root">
        <div id="header-container">
          <h1 className="main-header">Med.io</h1>
          <div id="profile-container" className="padded">
            <Image src={face} size='large' shape='circular' />
          </div>
        </div>
        <div id="side-menu-container">
          <div className="padded">
            <SideMenu />
          </div>
        </div>
        <div id="app-contents-container">
          <div className="padded">
            { appContent }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
