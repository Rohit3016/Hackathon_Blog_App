import { deleteBlog, updateBlog } from "../services/blog";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Blog(props) {
    

  const navigate = useNavigate() 
  const { id ,title, contents } = props;
  const toUpdate = async() =>{
    const result = await updateBlog(id)
    if(result['status'] === "Success"){
        
        toast.success('Blog Updated')
        navigate('/category')
     }else{
        toast.error('Failed to update')
     }
  }
  const toDelete = async() =>{
    
    const result = await deleteBlog(id)
    if(result['status'] === "Success"){
        
        toast.success('Blog Deleted')
        navigate('/blog')
     }else{
        toast.error('Failed to delete')
     
  }
  }
  return (
    <tr>

      <td>{id}</td>
      <td>{title}</td>
      <td>{contents}</td>
      <td>
        <button onClick={toUpdate} className='btn btn-warning'>
        Update
      </button>
      <button onClick={toDelete} className='btn btn-danger'>
        Delete
      </button></td>
    </tr>
  );
}
export default Blog;
