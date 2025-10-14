import './Post.css'
export default function Post(props)
{
 
  return (
    <div className='post'>
      <p className='author'>{props.author}</p>
      <p className="body">{props.body}</p>
    </div>
  );
}