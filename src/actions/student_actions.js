import APIUtil from '../util/api_util';

import {
  normalizeEntitiesArray,
  transformStudent,
  transformAward,
  transformAwards
} from '../selectors/selectors';
import { receiveAwards, startLoadingAwards } from './award_actions';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
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
      return dispatch(receiveStudent(student));
  });
};

export const createStudent = (firstName, lastName) => dispatch => (
  APIUtil.createStudent(firstName, lastName)
    .then(student => dispatch(receiveStudent(student)))
);

export const updateStudent = (id, attributes) => dispatch => (
  // attributes is { firstName, lastName, active }
  APIUtil.updateStudent(id, attributes).then(
    student => dispatch(receiveStudent(student))
  )
);

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveStudent = student => ({
  type: RECEIVE_STUDENT,
  student
})

export const startLoadingStudents = () => ({
  type: START_LOADING_STUDENTS
});
