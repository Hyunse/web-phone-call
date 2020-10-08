import { gql } from '@apollo/react-hooks';

export const SEARCH_USER = gql`
  query searchUser($email: String!) {
    SearchUser(email:$email) {
      ok
      error
      user {
        id
        email
        name
      }
    }
  }
`;
