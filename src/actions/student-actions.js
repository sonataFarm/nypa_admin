import normalize from '../selectors/selectors';

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_SINGLE_STUDENT = "RECEIVE_SINGLE_STUDENT";

export const fetchAllStudents = () => (
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
