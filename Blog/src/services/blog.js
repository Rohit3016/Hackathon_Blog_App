import axios from 'axios'
import config from '../config'

export async function getBlogs() {

  const response = await axios.get(`${config.url}/blog/all`)
  return response.data
}
export async function getMyBlogs() {
  const id = sessionStorage.getItem('user_id')
  const response = await axios.get(`${config.url}/blog/my`,{
      headers: {
        id,
      }   
  })
  return response.data
}

export async function addBlog(title,contents,user_id,category_id) {

  const body = {
    title,contents,user_id,category_id
}
const response = await axios.post(`${config.url}/blog/add`,body)

return response.data
}
export async function searchBlog(title) {

const response = await axios.get(`${config.url}/blog/search`,{
  headers: {
    title,
  }   
})

return response.data
}

export async function updateBlog(id) {
  const response = await axios.put(`${config.url}/blog/update`,{
    headers: {
      id,
    }   
  })

  return response.data
}

export async function deleteBlog(id) {

  const response = await axios.delete(`${config.url}/blog/delete`,{
    headers: {
      id,
    }   
  })
 
  return response.data
}
