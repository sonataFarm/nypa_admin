import { mutation } from './graphql_util';
import $ from 'jquery';
import Query from 'graphql-query-builder';

const API_PATH = '/graphql';

const postData = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Accept": 'application/json'
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
};

const getData = () => fetch(API_PATH).then(res => console.log(res));

const fetchAllStudents = () => {
  const query = "query {allStudents {id, firstName, lastName}}"

  // return getData();

  return postData(API_PATH, { query });
  // return $.ajax({
  // dataType: 'json',
  //   method: 'POST',
  //   url: API_PATH,
  //   data: { query }
  // });
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
