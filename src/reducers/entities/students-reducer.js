const StudentsReducer = (state = [], action) => {
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
      }
  }
}
