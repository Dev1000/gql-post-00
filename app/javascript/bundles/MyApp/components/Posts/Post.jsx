import React, {useCallback, useState} from "react";
import {useMutation} from "@apollo/client";

import {UPDATE_POST} from "../Utils/GqlQueries";

const Post = (post) => {
  const [object, setObject] = useState(post);
  const [showEdit, setShowEdit] = useState(false);
  const [updatePost, {data, loading, error}] = useMutation(UPDATE_POST, {
    onCompleted(data){
      console.log('update data:', data);
      updateShow();
    }
  });

  const updateShow = () => {
    setShowEdit(prevState => !prevState);
  };

  const onChangeHandler = useCallback(({target: {name, value}}) => setObject(
    state => ({...state, [name]: value})
  ), []);

  const execUpdate = () => {
    updatePost({
      variables: {
        id: post.id,
        title: object.title,
        body: object.body
      }
    });
  };

  return (
    <li style={{marginBottom: '5px'}}>
    {
      showEdit ?
        <div>
          <input name="title" value={object.title} onChange={onChangeHandler}/>
          <input name="body" value={object.body} onChange={onChangeHandler}/>
          <button onClick={updateShow}>Cancel</button>
          <button onClick={execUpdate}>Update</button>
        </div> :
        <div>{post.title} - {post.body} | <button onClick={updateShow}>Edit</button></div>
    }
  </li>)
};

export default Post;