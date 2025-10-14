import "./NewPost.css";


export default function NewPost(props)
{
 

  return (


    <form className="form">
       <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
   
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}></textarea>
      </p>
   
     
    </form>


  );
}