import React from 'react';
import { Card, CardHeader, CardBody, Form, Label, Input } from 'reactstrap';
import AwardList from './AwardList';

import StudentForm from './StudentForm';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchStudent();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.fetchStudent !== this.props.fetchStudent) {
      newProps.fetchStudent();
    }
  }

  render() {
    return this.props.loaded && (
      <div>
        <StudentForm
          student={this.props.student}
          updateStudent={this.props.updateStudent}
        />
        <AwardList
          awards={this.props.awards}
          createAward={this.props.createAward}
        />
      </div>
    );
  }
}

export default Student;
