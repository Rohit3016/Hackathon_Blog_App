import axios from 'axios'
import config from '../config'

export async function getCategories() {

  const response = await axios.get(`${config.url}/category`)
  return response.data
}

export async function addCategory(title,description) {

  const body = {
    title ,description
}
const response = await axios.post(`${config.url}/category/add`,body)

return response.data
}

export async function updateCategories(id) {

  const response = await axios.put(`${config.url}/category/${id}`)

  return response.data
}
export async function deleteCategories(id) {


  const response = await axios.delete(`${config.url}/category/${id}`)

  return response.data
}
