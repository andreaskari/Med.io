import React, { Component } from 'react';
import { Grid, Header, Button, Icon, Form, Input, TextArea, Table } from 'semantic-ui-react'

import './css/Cases.css';


class NewCase extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      activeMenuItem: null,

    }
  }

  getEmptyRow() {
    return {
      symptom: null,
      start_date: null,
      continuing: null
      end_date: null,
    };
  }

  renderRow(row) {
    var symptomInput = (<Input transparent placeholder='Sneezing...' onChange />);
    var startDateInput = (<Input transparent placeholder='10/3/17...' />);
    var continuingInput = (<Icon color='green' name='checkmark' size='large' />);
    var endDateInput = (<Input transparent placeholder='N/A...' />);
  }

  render() {
    return (
      <div id="cases-container">
        <div id="cases-contents">
          <Grid padded stretched>
            <Grid.Row columns={16}>
              <Header as='h1' textAlign='center'>
                <Header.Content>
                  New Case
                </Header.Content>
              </Header>              
            </Grid.Row>
            <Grid.Row columns={16}>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Field id='input-case-name' control={Input} label='Case Name' placeholder='Case Name' />
                </Form.Group>
                <Form.Field id='input-case-description' control={TextArea} label='Description' placeholder='Description' />              
              </Form>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Symptom</Table.HeaderCell>
                    <Table.HeaderCell>Start Date</Table.HeaderCell>
                    <Table.HeaderCell>Continuing?</Table.HeaderCell>
                    <Table.HeaderCell>End Date</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Input transparent placeholder='Sneezing...' />
                    </Table.Cell>
                    <Table.Cell>
                      <Input transparent placeholder='10/3/17...' />
                    </Table.Cell>
                    <Table.Cell>
                      <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                      <Input transparent placeholder='N/A...' />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
          </Grid>
        </div>
        <div id="new-case-container" className="outer">
          <div className="inner">
            <Button 
              content='Cancel' 
              color='red' 
              size='big' 
              compact 
              onClick={this.props.changeCasesToActive}
            />
            <Button 
              content='Create' 
              color='green' 
              size='big' 
              compact 
              onClick={this.props.changeCasesToActive}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewCase;
