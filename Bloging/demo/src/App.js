// App.js
import React, { useState } from "react";
import Navbar1 from './Navbar1';
import Home from './Home';
import Bloglist from "./Bloglist";
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([
,    
    {titleName:"Welcome party",body:"lorem ipsum",author:"poorna",Content:<p>"<b>Introduction:</b>
    Welcome to our blog post about our fantastic Welcome Party! We had an incredible time celebrating together with friends, family, and loved ones. In this blog, we'll share all the exciting moments and memories that made this party unforgettable.
    <br /> <br />
    <b>Description</b>:
    The venue was beautifully decorated with vibrant colors and dazzling lights, setting the perfect ambiance for the evening. Laughter and joy filled the air as guests mingled and connected with old friends and new acquaintances. We had an array of mouthwatering dishes and delectable desserts that satisfied everyone's taste buds.
    
    The highlight of the party was our live band, who had everyone dancing and grooving to the beats. The dance floor was never empty as guests showed off their best moves and enjoyed the lively music.
    
    Our Welcome Party was also filled with fun activities and games that brought out the competitive spirit in everyone. From thrilling games to entertaining performances, there was never a dull moment.
    
    As the night went on, we gathered around for heartfelt speeches and toasts, expressing our gratitude for the love and support of everyone who made it to the party.
    
    The joyous atmosphere and the warmth of friendship made our Welcome Party a truly unforgettable event. We want to thank each and every one of our guests for being a part of this incredible celebration.
    <br /> <br />
    <b>Conclusion:</b>
    Our Welcome Party was a tremendous success, leaving us with cherished memories that will be treasured for a lifetime. We're immensely grateful to all those who joined us in making this occasion so special."</p>,id:1},    
    // {title :"Welcome party",body:"lorem ipsum",author:"luna",id:2},    
    // {title :"web top tips",body:"lorem ipsum",author:"vikram",id:3}, 
    // Add other existing blogs here
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [titleName, setTitleName] = useState('');
  const [author, setAuthor] = useState('');
  const [Content, setContent] = useState('');

  const handleNewBlog = () => {
    setShowPopup(true);
    setTitleName('');
    setAuthor('');
    setContent('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      titleName: titleName,
      author: author,
      Content: Content,
      id: blogs.length + 1,
    };
    setBlogs([...blogs, newBlog]);
    setShowPopup(false);
  };

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="App">
      <Navbar1 handleNewBlog={handleNewBlog} />
      <br /><br />
      <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {showPopup && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" value={titleName} onChange={(e) => setTitleName(e.target.value)} required />
            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <label>Blog Content:</label>
            <textarea value={Content} onChange={(e) => setContent(e.target.value)} required />
            <button type="submit">Create Blog</button>
            
          </form>
        </div>
      )}
    </div>
  );
}

export default App;











//Basic blog code
// import React from 'react'; 
// import Home from './Home';
// // import { Navbar } from 'react-bootstrap';
// import Navbar1 from './Navbar1';
// import './App.css';

// //import SignInForm from './component/SignInForm'




// function App() {
//   //const title="Welcome"
//   return (
//     <div className="App" >
      
//       <Navbar1 />
//       <br /><br />
//       <Home />
      
    
    

//     </div>
//   );
// }

// export default App;
// const App = () => {
//   return (
//     <div>
//       <h1>User Sign-in</h1>
//       <Navbar />
//       <Home />
//       <Bloglist />
//     </div>
//   );
// };

// export default App;







  
// import React from 'react';
// import ImageInput from './ImageInput';
// import NumberInput from './component/number';
// import SignInForm from './component/SignInForm';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Image Input Example</h1>
//       <ImageInput />
//       <h2>Number 12</h2>
//       <NumberInput/>
//       <SignInForm />
//     </div>
//   );
// }

// export default App;


  
  
  
  
  // import './App.css';
// import './index.css'

// import{ BrowserRouter,Router,Route,Routes} from 'react-router-dom';
// import Home from './Home';
// import Navbar from './Navbar';


 /*import { Component } from 'react';

class App extends Component{
  render(){
    return(
      
    <Classmethod />
    )
  }
}
*/


// // npm install axios react-dropzone

// import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Switch, useHistory } from 'react-router-dom';

// import SignInForm from './component/SignInForm';
// import UserPage from './UserPage' // Import the UserPage component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>User Sign-in</h1>
//         <Switch>
//           <Route exact path="/" component={SignInForm} />
//           <Route path="/user" component={UserPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import ImageUpload from './ImageUpload';

// function App() {
//   return (
//     <div>
//       <h1>Image Upload Example</h1>
//       <ImageUpload />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import './App.css';
// import ImageUploadForm from './ImageUploadForm';

// function App() {
//   return (
//     <div className="App">
//       <h1>Image Upload and JSON Data Submission</h1>
//       <ImageUploadForm />
//     </div>
//   );
// }

// export default App;