import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../../actions/student_actions';
import { RECEIVE_AWARD } from '../../actions/award_actions';

const StudentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STUDENTS:
      return {
        ...state,
        ...action.students
      };

    case RECEIVE_STUDENT:
      return {
        ...state,
        [action.student.id]: action.student
      };

    case RECEIVE_AWARD:
      return {
        ...state,
        awards: [
          ...state.awards,
          action.award.id
        ]
      };

    default:
      return state;
  }
};

export default StudentsReducer;
