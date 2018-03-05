import gql from 'graphql-tag';
import client from './graphql_utils';
import QUERIES from './query_strings';
import MUTATIONS from './mutation_strings';
import { normalize } from '../selectors/selectors';

const API_PATH = '/graphql';

// STUDENTS
const fetchAllStudents = () => (
  client.query(
    { query: QUERIES.FETCH_ALL_STUDENTS }
  ).then(
    res => normalize(res.data.allStudents)
  )
);

const fetchStudent = id => {
  const variables = { id };

  return client.query(
    { query: QUERIES.FETCH_STUDENT, variables }
  ).then(
    res => res.data
  );
};

const createStudent = (first, last, active = true) => {
  const variables = {
    name: { first, last },
    active
  };

  return client.mutate(
    { mutation: MUTATIONS.CREATE_STUDENT, variables }
  ).then(
    res => res.data
  );
}

const updateStudent = (id, attributes) => {
  const variables = {
    id,
    name: {
      first: attributes.firstName,
      last: attributes.lastName
    },
    active: attributes.active
  };

  return client.mutate(
    { mutation: MUTATIONS.UPDATE_STUDENT, variables }
  ).then(
    res => res.data
  );
}

// AWARDS
const fetchAllAwards = () => (
  client.query(QUERIES.FETCH_ALL_AWARDS).then(res => res.data)
);

const fetchAward = id => (
  client.query(
    { query: QUERIES.FETCH_AWARD, variables: { id } }
  ).then(
    res => res.data
  )
)

const fetchStudentAwards = studentId => {
  const variables = { student_id: studentId };
  return client.query({ query: QUERIES.FETCH_AWARDS, variables });
}

const createAward = awardParams => {
  // awardParams is { student_id, competition, placement, date }
  const variables = awardParams;
  return client.mutate(
    { mutation: MUTATIONS.CREATE_AWARD, variables }
  ).then(
    res => res.data
  );
};

export default {
  fetchAllStudents,
  fetchStudent,
  createStudent,
  updateStudent,
  fetchAllAwards,
  fetchAward,
  createAward,
  fetchStudentAwards
};
