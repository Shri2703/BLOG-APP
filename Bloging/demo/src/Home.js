import React from "react";
import { useState, useEffect } from "react";
 import Bloglist from "./Bloglist";
 const Home = () => {
     const [blogs,setBlogs]=useState([
         {titleName:"My new website",body:"lorem ipsum",author:"mario",Content:"rtyuidfghrtyu",id:1},    
         {titleName :"Welcome party",body:"lorem ipsum",author:"luna",Content:"rtyuidfghrtyu",id:2},    
         {titleName :"web top tips",body:"lorem ipsum",author:"vikram",Content:"rtyuidfghrtyu",id:3}, 
         {titleName:"Metazord"}   ]); 
 //const [name, setName]= useState('mario'); 
 const handleDelete=(id) =>{
 const newBlogs=blogs.filter( blog =>blog.id !== id);
 setBlogs(newBlogs);     
 }
 useEffect(() => {
     console.log('use effect run');
    //  console.log(name);
 },[]);

 const handleLike = (id) => {
  const updatedBlogs = blogs.map((blog) =>
    blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
  );
  setBlogs(updatedBlogs);
};

const handleComment = (id) => {
  const comment = prompt("Enter your comment:");
  if (comment) {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, comments: [...blog.comments, comment] } : blog
    );
    setBlogs(updatedBlogs);
  }
};

 return (
     <div className="home">         
         <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
         <br />
         <br />
            <br />
            {/*<Bloglist blogs={blogs.filter((blogs)  => blogs.author === 'mario')} title="Mario Blog " />*/}
        
        </div> 
     );
}
export default Home;
 //let name='mari';
 
         {/*<button onClick={handleClick}> Click me</button>*/
            /*<button onClick={(e)=>hangleClickAgain('Poorna',e)}> Clickme Again</button>*/}  
  
    /*const hangleClickAgain = (name , e) =>{
        console.log('hello'+ name, e.target);
    }*/



    

 
