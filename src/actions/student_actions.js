import { normalize } from '../selectors/selectors';
import APIUtil from '../util/api_util';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_SINGLE_STUDENT = "RECEIVE_SINGLE_STUDENT";

export const fetchAllStudents = () => dispatch => (
  APIUtil.fetchAllStudents().then(
    data => {
      const students = normalize(data.allStudents);
      return dispatch(receiveStudents(students));
    }
  )
);

export const fetchStudent = id => dispatch => (
  APIUtil.fetchStudent(id)
    .then(data => (
      dispatch(receiveStudent(data.student))
    )
  )
);

export const createStudent = (firstName, lastName) => dispatch => (
  APIUtil.createStudent(firstName, lastName)
    .then(data => (
      dispatch(receiveStudent(data.createStudent))
    )
  )
);

export const updateStudent = (id, attributes) => dispatch => (
  // attributes is { firstName, lastName, active }
  APIUtil.updateStudent(id, attributes).then(
    data => dispatch(receiveStudent(data.updateStudent))
  )
);

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveStudent = student => ({
  type: RECEIVE_SINGLE_STUDENT,
  student
})
