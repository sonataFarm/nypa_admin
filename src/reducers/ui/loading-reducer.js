import {
  START_LOADING_STUDENTS,
  RECEIVE_STUDENT
} from '../../actions/student_actions';

import {
  START_LOADING_AWARDS,
  RECEIVE_AWARDS
} from '../../actions/award_actions';

const initialState = {
  // state is true by default
  // to prevent component rendering on initial load
  awards: true,
  students: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_STUDENTS:
      return { ...state, students: true };
    case START_LOADING_AWARDS:
      return { ...state, awards: true };
    case RECEIVE_STUDENT:
      return { ...state, students: false };
    case RECEIVE_AWARDS:
      return { ...state, awards: false }
    default:
      return state;
  }
};
