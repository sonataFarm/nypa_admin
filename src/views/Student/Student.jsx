import React from 'react';
import { Card, CardHeader, CardBody, Form, Label, Input } from 'reactstrap';

import StudentForm from './StudentForm';

class Student extends React.Component {
  componentDidMount() {
    if (!this.props.student) this.fetchStudent();
  }

  render() {
    return <StudentForm
      student={this.props.student}
      updateStudent={this.props.updateStudent}
    />;
  }
}

export default Student;
