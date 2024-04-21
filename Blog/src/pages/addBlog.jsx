import { useState } from 'react'
import { toast } from 'react-toastify'
import { addBlog } from '../services/blog'
import { useNavigate } from "react-router-dom";

function AddBlog(){

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category_id, setCategory_id] = useState('')
    const user_id = sessionStorage.getItem('user_id')
    const navigate = useNavigate()
    
    const onButton = async () =>{

        if(title.length === 0){
            toast.warning('Enter Title')
        }else if(content.length ===0){
            toast.warning('Enter Description')
        }else{
            const result = await addBlog(title,content,user_id,category_id)
            if(result['status'] === "Success"){
                
                toast.success('Blog Added')
                navigate('/home')
             }else{
                toast.error('Failed to add')
             }
        }
    }
    const onGoBack = async () =>{
        navigate('/home')
        
    }
    
  

    return(
        <>
               
        <div>

     <h1 className="page-title mb-5">Add Blog </h1>   

      <div className="row ">
        <div className="col"></div>
        <div className="col ">
          <form >
            <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label">
                Title
              </label>
              <input onChange={(event)=>{
                setTitle(event.target.value)
              }} type="text" id="form2Example1" className="form-control" />
              
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label">
            Contents
              </label>
              <input onChange={(event)=>{
                setContent(event.target.value)
              }} type="text" id="form2Example2" className="form-control" />
              
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label">
            Category ID
              </label>
              <input onChange={(event)=>{
                setCategory_id(event.target.value)
              }} type="text" id="form2Example2" className="form-control" />
              
            </div>



            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
              onClick={onButton}
            >
              Add
            </button>
            <br />
            <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
              onClick={onGoBack}
            >
              Go Back
            </button>

            
          </form>
        </div>

        <div className="col"></div>
      </div>
    </div>    
        </>
    )
}

export default AddBlog