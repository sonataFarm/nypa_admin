import { mutation } from './graphql_util';
import $ from 'jquery';
import Query from 'graphql-query-builder';

const API_PATH = '/graphql';

const fetchAllStudents = () => {
  const query = "query {allStudents {id, firstName, lastName, active}}"

  return $.ajax({
  dataType: 'json',
    method: 'POST',
    url: API_PATH,
    data: { query }
  }).then(res => res.data)
};

const createStudent = (firstName, lastName, active = true) => {
  const query = `query {
    createStudent(
      name: {
        first: ${firstName},
        last: ${lastName}
      },
      active: ${active}
    ) {
      id
      firstName
      lastName
    }
  }`

  return $.ajax({
    method: 'POST',
    url: API_PATH,
    data: { query }
  })
}

export default {
  fetchAllStudents,
  createStudent
};
