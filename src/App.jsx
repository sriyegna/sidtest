import './App.css';
import Map from './components/Map';
import SignIn from './components/SignIn'
import Register from './components/Register'
import Protected from './components/Protected'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

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
    path: "/protected",
    element: <Protected />,
  },
  {
    path: "/map",
    element: <Map />
  }
]);

const App = () => {
  return (
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  )
}

export default App;
