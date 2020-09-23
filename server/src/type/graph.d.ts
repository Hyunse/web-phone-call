export const typeDefs = ["type FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  FacebookConnect(name: String!, email: String, fbId: String!): FacebookConnectResponse!\n  SignIn(email: String!, password: String!): SignInResponse!\n  SignUp(email: String!, name: String!, country: String!, age: Int!, password: String!): SignUpResponse!\n}\n\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean!\n  profilePhoto: String\n  name: String!\n  fbId: String\n  password: String\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype getUserAllResponse {\n  users: [User]\n}\n\ntype Query {\n  GetAllUser: getUserAllResponse!\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  verified: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  GetAllUser: getUserAllResponse;
}

export interface getUserAllResponse {
  users: Array<User> | null;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean;
  profilePhoto: string | null;
  name: string;
  fbId: string | null;
  password: string | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  FacebookConnect: FacebookConnectResponse;
  SignIn: SignInResponse;
  SignUp: SignUpResponse;
}

export interface FacebookConnectMutationArgs {
  name: string;
  email: string | null;
  fbId: string;
}

export interface SignInMutationArgs {
  email: string;
  password: string;
}

export interface SignUpMutationArgs {
  email: string;
  name: string;
  country: string;
  age: number;
  password: string;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}
