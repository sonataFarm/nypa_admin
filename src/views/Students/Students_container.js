import { connect } from 'react-redux';

import Students from './Students';
import { denormalize } from '../../selectors/selectors';
import { fetchAllStudents, createStudent } from '../../actions/student_actions';

const mapStateToProps = state => ({
  students: denormalize(state.entities.students)
});

const mapDispatchToProps = dispatch => ({
  fetchAllStudents: () => dispatch(fetchAllStudents()),
  createStudent: (first, last) => dispatch(createStudent(first, last))
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
