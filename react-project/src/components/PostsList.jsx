import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import './Post.css';


export default function PostsList({isPosting,onStopPosting})
{

   

  return (
    <>

    {isPosting && (<Modal onClose={onStopPosting}>
    <NewPost onCancel={onStopPosting}/>
    </Modal>) }
    
   <ul className="posts">
      <li><Post author="selena" body="hi there, everyone should learn to use react.js"/></li>
    </ul>
    </>
    );
}