import { gql } from '@apollo/react-hooks';

export const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $name: String!
    $country: String
    $age: Int
  ) {
    SignUp(
      email: $email
      password: $password
      name: $name
      country: $country
      age: $age
    ) {
      ok
      error
      token
    }
  }
`;
