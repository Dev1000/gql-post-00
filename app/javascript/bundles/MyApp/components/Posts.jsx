import React, {useEffect, useState} from "react";
import gql from 'graphql-tag';
import {useQuery} from "@apollo/client";
import {withProvider} from "./Utils/graphqlProvider";
import Post from "./Posts/Post";

const postsQuery = gql`
  query allPosts {
    fetchPosts {
      id
      title
      body
    }
  }
`
/*const postQuery = gql`
  query{
    fetchPost(id: 1){
      id
      title
    }
  }
`*/
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const {data, loading, error} = useQuery(postsQuery);

  useEffect(() => {
    if(!loading && data){
      console.log('data:', data);
      setPosts(data.fetchPosts);
    }
  }, [loading, data]);

  if(loading){
    return <span>"Loading..."</span>
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => <Post key={post.id} {...post} />)}
        {/*<Post {...data.fetchPost} />*/}
      </ul>
    </div>
  )
}

export default withProvider(Posts)