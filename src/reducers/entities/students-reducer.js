import { RECEIVE_STUDENTS, RECEIVE_SINGLE_STUDENT } from '../../actions/student-actions';

const StudentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STUDENTS:
      return {
        ...state,
        action.students
      };

    case RECEIVE_SINGLE_STUDENT:
      return {
        ...state,
        ...action.student
      };
  }
};

export default StudentsReducer;
