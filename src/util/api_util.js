import gql from 'graphql-tag';
import Query from 'graphql-query-builder';
import client from './graphql_utils';

const API_PATH = '/graphql';

// STUDENTS
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

const fetchStudent = id => {
  const query = gql`
    query student($id: ID!) {
      student(id: $id) {
        id
        firstName
        lastName
        active
      }
    }`;

  const variables = { id };

  return client.query({ query, variables }).then(res => res.data);
};

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

const updateStudent = (id, attributes) => {
  const mutation = gql`
  mutation updateStudent($id: ID!, $name: NAME!, $active: Boolean!) {
    updateStudent(
      id: $id,
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
    id,
    name: {
      first: attributes.firstName,
      last: attributes.lastName
    },
    active: attributes.active
  };

  return client.mutate({ mutation, variables}).then(res => res.data);
}

// AWARDS
const fetchAllAwards = () => {
  const query = gql`
    query allAwards {
      allAwards {
        id
        date
        competition
        placement
        student {
          id
        }
      }
    }`;

  return client.query({ query }).then(res => res.data);
}

const fetchAward = id => {
  const query = gql`
    query award($id: ID!) {
      award(
        id: $id
      ) {
        id
        date
        competition
        placement
        student {
          id
        }
      }
    }`;

  return client.query({ query, variables: { id } }).then(res => res.data);
}

const createAward = awardParams => {
  // awardParams is { student_id, competition, placement, date }

  const mutation = gql`
    mutation award(
      $student_id: ID!,
      $competition: String!,
      $placement: String!,
      $date: Date!
    ) {
      createAward(
        student_id: $student_id,
        competition: $competition,
        placement: $placement,
        date: $date
      ) {
        id
        date
        competition
        placement
        student {
          id
        }
      }
    }`;

  return client.mutate({ mutation, variables: awardParams });
};

export default {
  fetchAllStudents,
  fetchStudent,
  createStudent,
  updateStudent,
  fetchAllAwards,
  fetchAward,
  createAward,
};
