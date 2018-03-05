import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Student from './Student';
import { fetchStudent, updateStudent } from '../../actions/student_actions';
import { createAward } from '../../actions/award_actions';

const mapStateToProps = (state, ownProps) => {
  const student = state.entities.students[ownProps.match.params.id];

  const awards = student.awards.map(
    award => state.entities.awards[award.id]
  );

  const loaded = student && student.awards.every(
    award => state.entities.awards[award.id]
  );

  return {
    student,
    awards,
    loaded
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchStudent: () => dispatch(fetchStudent(ownProps.match.params.id)),
  updateStudent: (id, attributes) => dispatch(updateStudent(id, attributes)),
  createAward: params => dispatch(createAward(params))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Student)
);
