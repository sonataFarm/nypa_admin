import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Student from './Student';
import { fetchStudent, updateStudent } from '../../actions/student_actions';

const mapStateToProps = (state, ownProps) => ({
  student: state.entities.students[ownProps.match.params.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchStudent: () => dispatch(fetchStudent(ownProps.match.params.id)),
  updateStudent: (id, attributes) => dispatch(updateStudent(id, attributes))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Student)
);
