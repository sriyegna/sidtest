import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom'
import SignIn from './SignIn';
import Register from './Register'
import { useMemo } from 'react';

const UserGuard = (props) => {
  debugger;
  const location = useLocation();
  let navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['token']);
  // const notLoggedInPaths = ['/', '/register']
  const notLoggedInPaths = {
    "/": {
      path: "/",
      component: <SignIn />
    },
    "/register": {
      path: "/register",
      component: <Register />
    }
  }

  const checkIsInNotLoggedInPath = () => {
    return notLoggedInPaths[location.pathname]
  }

  const notLoggedInPath = useMemo(() => checkIsInNotLoggedInPath(), [location.pathname])

  console.log(location.pathname);

  if (cookies.token) {
    if (notLoggedInPath) {
      navigate('/map');
    } else {
      return props.children;
    }
  } else {
    const path = notLoggedInPath;
    if (path) {
      return path.component
    }
    else {
      navigate('/');
    }
  }
}


export default UserGuard;