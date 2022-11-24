import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import "./index.css"
import Login from './components/log/Login';
import ErrorPage from './components/error/ErrorPage';
import Register from './components/register/Register';
import AddInmueble from './components/addInmueble/AddInmueble';


const ProtectedRoute = ({children})=>{
  const token = localStorage.getItem("token")
  if(!token){
    return <Navigate to={"/"} replace/>
  }
  return children 
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    
    path: "home",
    element:
    <ProtectedRoute>
     <Home/>
    </ProtectedRoute>,
  },
  {
    path: "app",
    element: <App />,
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "ingresoNuevo",
    element: <AddInmueble/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
