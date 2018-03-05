import { normalize } from '../selectors/selectors';
import APIUtil from '../util/api_util';
import { receiveAwards } from './award_actions';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_SINGLE_STUDENT = "RECEIVE_SINGLE_STUDENT";

export const fetchAllStudents = () => dispatch => (
  APIUtil.fetchAllStudents().then(
    students => (
      dispatch(receiveStudents(students))
    )
  )
);

export const fetchStudent = studentId => dispatch => (
  Promise.all([
    APIUtil.fetchStudent(studentId),
    APIUtil.fetchStudentAwards(studentId)
  ])
    .then(data => {
      let awards = [...data.student.awards];
      let student = { ...data.student };

      student.awards = awards.map(award => award.id);
      dispatch(receiveStudent(student));
      dispatch(receiveAwards(awards));
    })
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
