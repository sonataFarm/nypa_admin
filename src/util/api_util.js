import { mutation } from './graphql_util';
import $ from 'jquery';
import Query from 'graphql-query-builder';

const fetchAllStudents = () => {
  const query = "query {allStudents {id, firstName, lastName}}"

  return $.ajax({
    method: 'POST',
    url: '/graphql',
    data: { query }
  });
}

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
    url: '/graphql',
    data: { query }
  })
}

export default {
  fetchAllStudents,
  createStudent
};
