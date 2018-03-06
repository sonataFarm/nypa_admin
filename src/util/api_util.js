import gql from 'graphql-tag';
import client from './graphql_utils';
import QUERIES from './query_strings';
import MUTATIONS from './mutation_strings';
import {
  normalizeEntitiesArray,
  transformStudent,
  transformAward,
  transformAwards
 } from '../selectors/selectors';

const API_PATH = '/graphql';

// STUDENTS
const fetchAllStudents = () => (
  client.query(
    { query: QUERIES.FETCH_ALL_STUDENTS }
  ).then(
    res => normalizeEntitiesArray(res.data.allStudents)
  )
);

const fetchStudent = id => {
  const variables = { id };

  return client.query(
    { query: QUERIES.FETCH_STUDENT, variables }
  ).then(
    res => res.data.student
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
    res => transformStudent(res.data.createStudent)
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
  ).then(res =>
    transformStudent(res.data.updateStudent));
}

// AWARDS
const fetchAllAwards = () => (
  client.query({ query: QUERIES.FETCH_ALL_AWARDS }).then(res =>
    transformAwards(res.data.allAwards))
);

const fetchAward = id => (
  client.query(
    { query: QUERIES.FETCH_AWARD, variables: { id } }
  ).then(res =>
    transformAward(res.data.award))
);

const fetchStudentAwards = studentId => {
  const variables = { student_id: studentId };
  return client.query(
    { query: QUERIES.FETCH_STUDENT_AWARDS, variables }
  ).then(
    res => {
      const awards = transformAwards(res.data.getStudentAwards);
      return normalizeEntitiesArray(awards);
    }
  );
}

const createAward = awardParams => {
  // awardParams is { studentId, competition, placement, date }
  const variables = awardParams;
  return client.mutate({
    mutation: MUTATIONS.CREATE_AWARD,
    variables: {
      ...variables,
      student_id: variables.studentId
    }
  }).then(
    res => transformAward(res.data.createAward)
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
