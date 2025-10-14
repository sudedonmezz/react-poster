import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
import './Post.css';


export default function PostsList({isPosting,onStopPosting})
{

   const [enteredBody,setEnteredBody]=useState(''); //return an array
   const [enteredAuthor,setEnteredAuthor]=useState('');
 

  function changeBodyListener(event)
  {
   setEnteredBody(event.target.value); 
  // document.querySelector(".textarea1").innerHTML=enteredBody;
  }

  function AuthorChangeHandler(event)
  {
    setEnteredAuthor(event.target.value);
  }

 

  return (
    <>

    {isPosting && (<Modal onClose={onStopPosting}>
    <NewPost onBodyChange={changeBodyListener} onAuthorChange={AuthorChangeHandler}/>
    </Modal>) }
    
   <ul className="posts">
     <li> <Post author={enteredAuthor} body={enteredBody}/></li>
     <li><Post author="tarzzan" body="omg you should try to learn react.js buddy"/></li>
     <li> <Post author="zayn" body="i started to learn react.js in my village lol"/></li>
      <li><Post author="selena" body="hi there, everyone should learn to use react.js"/></li>
    </ul>
    </>
    );
}