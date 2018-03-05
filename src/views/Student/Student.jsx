import React from 'react';
import { Card, CardHeader, CardBody, Form, Label, Input } from 'reactstrap';
import AwardList from './AwardList';

import StudentForm from './StudentForm';

class Student extends React.Component {
  componentDidMount() {
    this.props.fetchStudent();
  }

  render() {
    return (
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
