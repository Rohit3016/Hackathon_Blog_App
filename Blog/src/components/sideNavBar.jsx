import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const full_name = sessionStorage.getItem(full_name)
  const logOut = ()=>{
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('full_name')
  }
  return (
    <>
    <div className="col-3"> 
    
      <nav className="sidebar">
        <h1 className="mt-3">Hello</h1>
        <hr />
        <ul>
          <li>
          <Link to="/blog/my" >My Blogs</Link>
          </li>
          <li>
          <Link to="/blog/all" >All Blogs</Link>
          </li>
          <li>
          <Link to="/category/add" >Add Category</Link>
          </li>
          <li>
          <Link to="/category" >Show Categories</Link>
          </li>
          <li>
          <Link to="/blog/add" >Add Blog</Link>
          </li>
          <li>
          <Link to="/blog/search" >Search Blogs</Link>
          </li>
          <li>
          <Link to="/login" ><button onClick={logOut} > Logout</button></Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className="col-9"> </div>
    </>
  );
};
export default Sidebar;