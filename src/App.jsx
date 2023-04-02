import './App.css';
import Map from './components/Map';
import SignIn from './components/SignIn'
import Register from './components/Register'
import UserGuard from './components/UserGuard';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <UserGuard>
        <SignIn />
      </UserGuard>,
  },
  {
    path: "/register",
    element:
      <UserGuard>
        <Register />
      </UserGuard>
  },
  {
    path: "/map",
    element:
      <UserGuard>
        <Map />
      </UserGuard>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
