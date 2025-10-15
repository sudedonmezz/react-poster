import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';
import '../components/Posts.css';

function Posts() {
 
  return (

    <>
    <Outlet/>
   <main>
   <PostsList />
   </main>
   </>
  );
}

export default Posts;
