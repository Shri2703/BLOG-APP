// Navbar1.js
import React from "react";

const Navbar1 = ({ handleNewBlog }) => {
  return (
    <nav className="navbar">
      <h1> InfiniteX</h1>
      <div className="links">
        <a href="/">Home</a>
        <button onClick={handleNewBlog} style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Blog</button>
      </div>
    </nav>
  );
}

export default Navbar1;
