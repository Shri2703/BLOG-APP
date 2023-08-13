// Bloglist.js
import React from "react";

const Bloglist = ({ blogs, title, handleDelete }) => {
  if (!blogs || blogs.length === 0) {
    // If 'blogs' is undefined or empty, display a message or return null
    return <p>No blogs to display</p>;
  }
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs && blogs.map((blog) => ( // Check if 'blogs' is not undefined
        <div className="blog-preview" key={blog.id}>
          <h2>{blog?.titleName}</h2>
          <p>Written by {blog.author}</p>
          <p>Content{blog.Content}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;





// const Bloglist = ( { 
//     blogs, title, handleDelete}) => {
    
    

//     return (
//         <div className="blog-list">
//             <h2>{title}</h2>
//             {blogs && blogs.map((blog) => (
//             <div className="blog-preview" key={blog.id}>
//                 <h2>{blogs.title}</h2>
//                 <p>Writen by {blogs.author}</p>
//                 <p>Content{blogs.Content}</p>
//                 <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
//             </div>
        
//         ))}
//         </div> 

//      );
// }
 
// export default Bloglist;