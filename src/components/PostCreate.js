import React, { useState } from 'react'; 
import axios from 'axios'; 

const PostCreate = () => { 
 const [title, setTitle] = useState(''); 
 const [content, setContent] = useState(''); 
 const handleSubmit = async (e) => { 
  e.preventDefault(); 
  try { 
   await axios.post('http://127.0.0.1:8000/posts/', { title, content }); 
   setTitle(''); 
   setContent(''); 
   console.log('Post created successfully.'); 
  } catch (error) { 
   console.error(error); 
  } 
 }; 

 return ( 
  <div> 
   <h1>Create Post</h1> 
   <form onSubmit={handleSubmit}> 
    <div> 
     <label>Title:</label> 
     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> 
    </div> 
    <div> 
     <label>Content:</label> 
     <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea> 
    </div> 
    <button type="submit">Create</button> 
   </form> 
  </div> 
 ); 
}; 

export default PostCreate; 