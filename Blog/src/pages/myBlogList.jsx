import { useEffect, useState } from "react";
import { getMyBlogs } from "../services/blog";
import { getBlogs } from "../services/blog";
import Blog from "../components/blog";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sideNavBar";

function MyBlogList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      loadBlogs()
    }, [])
  
    const loadBlogs = async () => {
      const result = await getMyBlogs();
      if (result["status"] === "Success") {
        setBlogs(result["data"]);
  
        // console.log(result["data"]);
      }
    };
  
    const onAdd = () => {
      navigate("/blog/add");
    };
    const onGoBack =  () => {
      navigate("/home");
    };

  return (
    <div>
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

      <button onClick={onAdd} className="btn btn-primary">
        Add Blog
      </button>

      <button className="btn btn-primary" onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default MyBlogList;
