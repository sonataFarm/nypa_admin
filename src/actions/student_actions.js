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

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});
