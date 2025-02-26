import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import Coffees from './components/Coffees.jsx'
import Error from './components/Error.jsx'
import View from './components/View.jsx'
import Update from './components/Update.jsx'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Users from './components/Users.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Coffees />,
        loader: () => fetch(`https://coffee-store-server-by-tirtho.vercel.app/coffees`)
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffees/view/:id",
        element: <View />,
        loader: ({ params }) => fetch(`https://coffee-store-server-by-tirtho.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/coffees/edit/:id",
        element: <Update />,
        loader: ({ params }) => fetch(`https://coffee-store-server-by-tirtho.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('https://coffee-store-server-by-tirtho.vercel.app/users')
      },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
