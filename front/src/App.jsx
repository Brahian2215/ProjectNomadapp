import './css/App.css'
import {
  createBrowserRouter, 
  RouterProvider
  } from 'react-router-dom'
import Index from './Pages/Index'
import Courses from './Pages/Courses'
import Login from './Pages/Login'
import Register from './Pages/Register'
import DashboardUser from './Pages/DashboardUser'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Index /></div>
  },
  {
    path: '/cursos',
    element: <div><Courses /></div>
  },
  {
    path: '/login',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboardUser',
    element: <div><DashboardUser /></div>
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
