import gql from 'graphql-tag';

const CREATE_STUDENT = gql`
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
  }
`;

const UPDATE_STUDENT = gql`
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
  }
`;

const CREATE_AWARD = gql`
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
  }
`;

export default {
  CREATE_STUDENT,
  UPDATE_STUDENT,
  CREATE_AWARD
}
