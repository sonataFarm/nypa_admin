import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardHeader, CardBody, CardFooter, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, active } = props.student;
    this.state = { firstName, lastName, active };
  }

  handleChange = (event) => {
    let newValue;
    if (event.target.id === "active") {
      newValue = event.target.checked;
    } else {
      newValue = event.target.value;
    }
    this.setState({ [event.target.id]: newValue });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateStudent(this.props.student.id, this.state);
    this.props.history.push('/students');
  }

  render() {
    const { firstName, lastName, active } = this.props.student;
    return <div>
    <Card>
      <CardHeader>
        <strong>Student Info</strong>
      </CardHeader>
      <CardBody>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Col md="1"><Label htmlFor="first">First Name</Label></Col>
            <Col md="5"><Input
              id="firstName" type="text"
              value={this.state.firstName} onChange={this.handleChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="1"><Label htmlFor="last">Last Name</Label></Col>
            <Col md="5"><Input id="lastName" type="text"
              value={this.state.lastName} onChange={this.handleChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="1"><Label htmlFor="active">Active</Label></Col>
            <Col md="3"><Input id="active" type="checkbox"
              checked={this.state.active} onChange={this.handleChange} />
            </Col>
            <Col md="2"><Button color="primary" id="submit">Update</Button></Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  </div>
  }
}

export default withRouter(StudentForm);
