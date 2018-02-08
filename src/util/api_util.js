import { mutation } from './graphql_util';
import Query from 'graphql-query-builder';

const createStudent = (first, last, active) => {
  const queryString = mutation(new Query(
    "createStudent",
    { name: { first, last } })
      .find("firstName", "lastName")
      .toString()
  );

  return $.ajax({
    method: 'POST',
    url: 'graphql'
    data: { query }
  })
}

export default {
  createStudent
}
