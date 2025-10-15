import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import './Post.css';
import { useState,useEffect } from "react";


export default function PostsList({isPosting,onStopPosting})
{
 
  const [posts,setPosts]=useState([]);
  const [isFetching,setIsFetching]=useState(false);


  useEffect(()=>{
   async function fetchPosts()
    {
      setIsFetching(true);
      const response= await fetch('http://localhost:8080/posts');
      const resData=await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();

  },[]);




  function addPostHandler(postData)
  {
    fetch('http://localhost:8080/posts',
      {
        method:'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type':'application/json'
        }
      }
    );
    setPosts(existingPosts=>[postData, ...existingPosts]);
  }

   

  return (
    <>

    {!isFetching && isPosting && (<Modal onClose={onStopPosting}>
    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
    </Modal>) }
    {posts.length>0 &&(
        <ul className="posts">
      {posts.map((post)=><Post key={post.body} author={post.author} body={post.body}/>)}
    </ul>
    )}
    {!isFetching && posts.length===0 && (
      <div style={{textAlign:'center', color:'peru'} }>
        <h2>There are no posts yet.</h2>
        <p>Start Adding some!</p>
      </div>
    )}

    {isFetching && <div style={{textAlign:'center', color:'peru'} }><p>Loading posts</p></div>}
 
    </>
    );
}