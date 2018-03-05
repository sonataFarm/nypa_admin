import gql from 'graphql-tag';

const FETCH_ALL_STUDENTS = gql`
  query students {
    allStudents {
      id
      firstName
      lastName
      active
      awards {
        id
      }
    }
  }
`;

const FETCH_STUDENT = gql`
  query student($id: ID!) {
    student(id: $id) {
      id
      firstName
      lastName
      active
      awards {
        id
      }
    }
  }
`;

const FETCH_ALL_AWARDS = gql`
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
  }
`;

const FETCH_AWARD = gql`
  query fetchAward($id: ID!) {
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
  }
`;

const FETCH_STUDENT_AWARDS = gql`
  query fetchStudentAwards($student_id: ID!) {
    getStudentAwards(student_id: $student_id) {
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
  FETCH_ALL_STUDENTS,
  FETCH_STUDENT,
  FETCH_ALL_AWARDS,
  FETCH_AWARD,
  FETCH_STUDENT_AWARDS
};
