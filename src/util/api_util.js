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

const createStudent = (first, last, active = true) => {
  const mutation = gql`
    mutation createStudent($name: NAME!, $active: Boolean) {
      createStudent(
        name: $name,
        active: $active
      ) {
        id
        firstName
        lastName
        active
      }
    }`;

  const variables = {
    name: { first, last },
    active
  }
  return client.mutate({ mutation, variables }).then(res => res.data);
}

export default {
  fetchAllStudents,
  createStudent
};
