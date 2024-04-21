import { useState } from 'react'
import { searchBlog } from '../services/blog'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import Blog from "../components/blog";

function SearchBlog(){
    const [title, setTitle] = useState('')
    const [blogs, setBlogs] = useState([]);
     const navigate = useNavigate()
    const onButton = async () =>{
    const result = await searchBlog(title)
            if(result['status'] === "Success"){
                setBlogs(result["data"]);
                toast.success('search Completed')

            }  
        }
        const onGoBack = async () =>{
            navigate('/home')
            
        }          
    return(
        <div>
            <h1 className="page-title mb-5">Search Blogs Here</h1>
            
            <label className="form-label">
                Title
              </label>
              <input onChange={(event)=>{
                setTitle(event.target.value)
              }} type="email" id="form2Example1" className="form-control" />
              <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
              onClick={onButton}
            >
              search
            </button>
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
              onClick={onGoBack}
            >
              Go Back
            </button>


            <hr />
            <h3 style={{textAlign:"center"}}>Result</h3>
            <hr />
            <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <Blog
                id={blog.id}
                title={blog.title}
                contents={blog.contents}
              />
            );
          })}
        </tbody>
      </table>
        </div>

        
    )
}


export default SearchBlog