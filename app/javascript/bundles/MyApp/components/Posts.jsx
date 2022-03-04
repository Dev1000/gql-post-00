import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { withProvider } from "./Utils/graphqlProvider";

import Post from "./Posts/Post";
import AddPost from "./Posts/AddPost";
import {GET_ALL_POST} from "./Utils/GqlQueries";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const {data, loading, error} = useQuery(GET_ALL_POST, {
    onCompleted(data){
      setPosts(data.fetchPosts);
    }
  });

  if (loading) return <span>"Loading..."</span>
  if (error) return <p>Error :( {error.message}</p>

  const updateShow = () => {
    setShowAdd(prevState => !prevState)
  }

  const updatePosts = post => {
    console.log('post:', post);
    setPosts([post, ...posts])
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => <Post key={post.id} {...post} />)}
      </ul>
      <p>
        <button onClick={updateShow}>Add Post</button>
      </p>
      {
        showAdd &&
          <AddPost
            updatePosts={updatePosts}
            updateShow={updateShow}
          />
      }
    </div>
  )
}

export default withProvider(Posts);
