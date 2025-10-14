import { useState } from "react";
import "./NewPost.css";



export default function NewPost(props)
{
 
  const [enteredBody,setEnteredBody]=useState(''); //return an array
   const [enteredAuthor,setEnteredAuthor]=useState('');
 

  function changeBodyHandler(event)
  {
   setEnteredBody(event.target.value); 
  // document.querySelector(".textarea1").innerHTML=enteredBody;
  }

  function AuthorChangeHandler(event)
  {
    setEnteredAuthor(event.target.value);
  }

 function submitHandler(event)
 {
event.preventDefault();
const postData={
  body: enteredBody,
  author:enteredAuthor
 };
 props.onAddPost(postData);
 props.onCancel();
 }

  return (


    <form className="form" onSubmit={submitHandler}>
       <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={AuthorChangeHandler} />
      </p>
   
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}></textarea>
      </p>

      <p className="actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
   
     
    </form>


  );
}