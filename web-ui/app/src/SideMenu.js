import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: props.activeMenuItem,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      activeMenuItem: nextProps.activeMenuItem,
    });
  }

  handleItemClick(name) { 
    this.setState({activeMenuItem: name});
    console.log(this.state.activeMenuItem);
  }

  render() {
    const { activeMenuItem } = this.state || {};

    return (
      <Menu vertical inverted fluid text size='large'>
        <Menu.Item>
          <Menu.Header>Basics</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='personal info' active={activeMenuItem === 'personal info'} onClick={this.handleItemClick.bind(this)} />
          </Menu.Menu>
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
    );
  }
}

export default SideMenu;
