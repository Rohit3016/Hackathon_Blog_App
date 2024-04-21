import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import LoginUser from './pages/login'
import RegisterUser from './pages/register'
import CategoryList from './pages/categoryList'
import BlogList from './pages/blogList'
import AddCategory from './pages/addCategory'
import AddBlog from './pages/addBlog'
import MyBlogList from './pages/myBlogList'
import SearchBlog from './pages/searchBlog'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user)

  return (
    <div className='container-fluid'>

      {/* {user.loginStatus && } */}

      <div className='container'>
        <Routes>
          <Route path='/' element={<LoginUser />} />
          <Route path='/login' element={<LoginUser />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category' element={<CategoryList />} />
          <Route path='/blog' element={<BlogList />} />
          <Route path='/blog/all' element={<BlogList />} />
          <Route path='/blog/my' element={<MyBlogList />} />
          <Route path='/category/add' element={<AddCategory />} />
          <Route path='/blog/add' element={<AddBlog />} />
          <Route path='/blog/search' element={<SearchBlog />} />
        </Routes>

        <ToastContainer />
      </div>
    </div>
  )
}

export default App
