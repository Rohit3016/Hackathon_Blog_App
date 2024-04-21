import { useState } from 'react'
import { toast } from 'react-toastify'
import { addCategory } from '../services/category'
import { useNavigate } from "react-router-dom";

function AddCategory(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    
    const onButton = async () =>{

        if(title.length === 0){
            toast.warning('Enter Title')
        }else if(description.length ===0){
            toast.warning('Enter Description')
        }else{
            const result = await addCategory(title,description)
            if(result['status'] === "Success"){
                
                toast.success('Category Added')
                navigate('/category')
             }else{
                toast.error('Failed to add')
             }
        }
    }
    const onGoBack = async () =>{
        navigate('/category')
        
    }

    return(
        <>
               
        <div>

     <h1 className="page-title mb-5">Add Category</h1>   

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
            Description
              </label>
              <input onChange={(event)=>{
                setDescription(event.target.value)
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

export default AddCategory