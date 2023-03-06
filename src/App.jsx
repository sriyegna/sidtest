import './App.css';
import Map from './components/Map';
import SignIn from './components/SignIn'
import Register from './components/Register'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/map",
    element: <Map />
  }
]);

const App = (props) => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
