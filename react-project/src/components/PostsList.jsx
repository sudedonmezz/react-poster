import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import './Post.css';
import { useState } from "react";


export default function PostsList({isPosting,onStopPosting})
{
  const [posts,setPosts]=useState([]);

  function addPostHandler(postData)
  {
    setPosts(existingPosts=>[postData, ...existingPosts]);
  }

   

  return (
    <>

    {isPosting && (<Modal onClose={onStopPosting}>
    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
    </Modal>) }
    {posts.length>0 &&(
        <ul className="posts">
      {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}
    </ul>
    )}
    {posts.length===0 && (
      <div style={{textAlign:'center', color:'peru'} }>
        <h2>There are no posts yet.</h2>
        <p>Start Adding some!</p>
      </div>
    )}
 
    </>
    );
}