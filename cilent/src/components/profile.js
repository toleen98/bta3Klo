import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Layout from "./Layout";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleServiceAdd = this.handleServiceAdd.bind(this)
  };

  //change the value of body to new service
  handleServiceAdd(event) {
    this.setState({ body: event.target.value });

  }

  //send data to database to save
  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      body: this.state.body
    }

    // data to server
    axios.post('http://localhost:5000/signup/update', payload)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  // getService() {
  //   axios.post('http://localhost:5000')
  //     .then(function (response) {
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     });
  // }

  render() {
    return (
      <div id="Profile">
        <Layout>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control type="text" value={this.state.service} onChange={this.handleServiceAdd} />
            </Form.Group>
            {/* <Button color="primary" size="sm" onClick={() => this.handleClick}>Add Service</Button> */}
            <Button color="primary" size="sm" type="submit">Add Service</Button>
          </Form>
          <ListGroup>
            <ListGroup.Item>Service 1</ListGroup.Item>
            <ListGroup.Item>Service 2</ListGroup.Item>
          </ListGroup>{" "}
          <Button color="primary" size="sm">Hire Me!!</Button>{" "}
          <Button color="primary" size="sm">Done</Button>{" "}
        </Layout>
      </div>
    );
  }
}

export default Profile;