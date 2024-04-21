import axios from 'axios'
import config from '../config'

export async function register(full_name, email, phone_no, password) {
  // body parameters
  const body = {
    full_name,
    email,
    phone_no,
    password,
  }

  // make API call
  const response = await axios.post(`${config.url}/user/register`, body)

  // read JSON data (response)
  return response.data
}

export async function login(email, password) {

  const body = {
    email,
    password
  }

  const response = await axios.post(`${config.url}/user/login`, body)

  return response.data
}
