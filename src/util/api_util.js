import { mutation } from './graphql_util';
import $ from 'jquery';
import Query from 'graphql-query-builder';

const getAllStudents = () => {
  const query = "query {allStudents {firstName, lastName}}"

  return $.ajax({
    method: 'POST',
    url: '/graphql',
    data: { query }
  });
}

const createStudent = (first, last, active = true) => {
  const query = mutation(new Query(
    "createStudent",
    {
      name: { first, last },
      active
     }).find("firstName", "lastName")
      .toString()
  );

  return $.ajax({
    method: 'POST',
    url: '/graphql',
    data: { query }
  })
}

export default {
  getAllStudents,
  createStudent
};
