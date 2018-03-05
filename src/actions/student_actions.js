import { normalize } from '../selectors/selectors';
import APIUtil from '../util/api_util';
import { receiveAwards, startLoadingAwards } from './award_actions';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_SINGLE_STUDENT = "RECEIVE_SINGLE_STUDENT";
export const START_LOADING_STUDENTS = "START_LOADING_STUDENTS";

export const fetchAllStudents = () => dispatch => (
  APIUtil.fetchAllStudents().then(
    students => (
      dispatch(receiveStudents(students))
    )
  )
);

export const fetchStudent = studentId => dispatch => {
  dispatch(startLoadingStudents());
  dispatch(startLoadingAwards());

  return Promise.all([
    APIUtil.fetchStudentAwards(studentId),
    APIUtil.fetchStudent(studentId)
  ]).then(data => {
      const [awards, student] = data;
      dispatch(receiveAwards(awards));

      dispatch(receiveStudent(student));
  });
};

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

export const startLoadingStudents = () => ({
  type: START_LOADING_STUDENTS
});
