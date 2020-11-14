import { gql } from '@apollo/react-hooks';

export const SEARCH_USER = gql`
  query searchUser($email: String!) {
    SearchUser(email: $email) {
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

export const ADD_FRIEND = gql`
  mutation addFriend($email: String!) {
    AddFriend(email: $email) {
      ok
      error
    }
  }
`;
