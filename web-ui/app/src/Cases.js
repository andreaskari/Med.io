import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react'

import './css/Cases.css';


class Cases extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      activeMenuItem: null,
    }
  }

  render() {
    return (
      <div id="cases-container">
        <div id="cases-contents">
          <Grid padded stretched>
            <Grid.Row columns={16}>
              <Header as='h1' textAlign='center'>
                <Header.Content>
                  Cases
                </Header.Content>
              </Header>              
            </Grid.Row>
          </Grid>
        </div>
        <div id="new-case-container" className="outer">
          <div className="inner">
            <Button 
              content='New Case' 
              color='blue' 
              size='big' 
              icon='plus' 
              labelPosition='left' 
              compact 
              onClick={this.props.changeNewCaseToActive}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cases;
