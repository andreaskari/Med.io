import React, { Component } from 'react';
import { Grid, Header, Segment, Image, Menu } from 'semantic-ui-react'

import face from './assets/face.png';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: null,
    }
  }

  handleItemClick(name) { 
    this.setState({activeMenuItem: name}) 
    console.log(this.state.activeMenuItem);
  }

  render() {

    const { activeMenuItem } = this.state || {}

    return (
      <Grid columns={3} padded stretched>
        <Grid.Row columns={16}>
          <Segment>
            <Grid columns={3} padded stretched>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={10}>
                <Header as='h1' textAlign='center'>
                  <Header.Content>
                    Med.io
                  </Header.Content>
                </Header>              
              </Grid.Column>
              <Grid.Column width={3} stretched>
                <Header as='h3' textAlign='right'>
                  <Image src={face} size='large' shape='circular' />
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <Menu vertical>
              <Menu.Item>
                <Menu.Header>Basics</Menu.Header>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Cases</Menu.Header>

                <Menu.Menu>
                  <Menu.Item name='cold' active={activeMenuItem === 'cold'} onClick={this.handleItemClick.bind(this)} />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>General Records</Menu.Header>

                <Menu.Menu>
                  <Menu.Item name='allergies' active={activeMenuItem === 'allergies'} onClick={this.handleItemClick.bind(this)} />
                  <Menu.Item name='surgeries' active={activeMenuItem === 'surgeries'} onClick={this.handleItemClick.bind(this)} />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Support</Menu.Header>

                <Menu.Menu>
                  <Menu.Item name='email' active={activeMenuItem === 'email'} onClick={this.handleItemClick.bind(this)}>
                    E-mail Support
                  </Menu.Item>

                  <Menu.Item name='faq' active={activeMenuItem === 'faq'} onClick={this.handleItemClick.bind(this)}>
                    FAQs
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={13}>
            Andre
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
