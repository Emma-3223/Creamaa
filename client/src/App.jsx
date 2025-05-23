import HomePage from './routes/homePage/homePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListPage from './routes/listPage/listPage'
import Layout from './routes/layout/layout'
import SinglePage from './routes/singlePage/singlePage'
import ProfilePage from './routes/profilePage/profilePage'
import Login from './routes/login/login'
import Register from './routes/register/register'
import NewPostPage from './routes/newPostPage/newPostPage.jsx'
// import ProfilePage from "./routes/profilePage/profilePage";

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },
        {
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
          future: {
            v7_relativeSplatPath: true
          }
          // {
        }

        //   path:"/add",
        //   element:<NewPostPage/>
        // },

        // {
        //   path:"/profile/update",
        //   element:<ProfileUpdatePage/>
        // },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
