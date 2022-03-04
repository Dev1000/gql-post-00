import {gql} from "@apollo/client";

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $body: String!){
    updatePost(
      input: {
        params: {
          id: $id,
          title: $title,
          body: $body
        }
      }
    ){
      post{
        id
        title
        body
      }
    }
  }
`
const ADD_POST = gql`
  mutation AddPost($title: String!, $body: String!){
    addPost(
      input: {
        params: {
          title: $title,
          body: $body
        }
      }
    ) {
      post {
        id
        title
        body
      }
    }
  }
`

const GET_ALL_POST = gql`
  query allPosts {
    fetchPosts {
      id
      title
      body
    }
  }
`


export {ADD_POST, GET_ALL_POST, UPDATE_POST}