import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_POST} from "../Utils/GqlQueries";

const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [addPost, {data, loading, error}] = useMutation(ADD_POST, {
    onCompleted(data){
      console.log('on data:', data);
      props.updatePosts(data.addPost.post)
    }
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const createPost = () => {
    addPost({variables: {title: title, body: body}});
    setTitle("");
    setBody("");
    props.updateShow();
  }


  return (
    <p>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"/>
      <input value={body} onChange={e => setBody(e.target.value)} placeholder="Body"/>
      <button onClick={createPost}>Create</button>
    </p>
  )
};

export default AddPost;