import gql from 'graphql-tag';
import Query from 'graphql-query-builder';
import client from './graphql_utils';

const API_PATH = '/graphql';

const fetchAllStudents = () => (
  client.query({
    query: gql`
      query students {
        allStudents {
          id
          firstName
          lastName
          active
        }
      }
    `,
  }).then(res => res.data)
);

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
