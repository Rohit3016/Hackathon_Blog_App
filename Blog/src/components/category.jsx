import { deleteCategories, updateCategories } from "../services/category";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Category(props) {
    

  const navigate = useNavigate() 
  const { id ,title, description  } = props;
  const toUpdate = async () =>{
    const result = await updateCategories(id)
    if(result['status'] === "Success"){
        
        toast.success('Category Updated')
        navigate('/category')
     }else{
        toast.error('Failed to update')
     }
  }
  const toDelete = async() =>{
    
    const result = await deleteCategories(id)
    if(result['status'] === "Success"){
        
        toast.success('Category Deleted')
        navigate('/category')
     }else{
        toast.error('Failed to delete')
     
  }
  }
  return (
    <tr>

      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
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
export default Category;
