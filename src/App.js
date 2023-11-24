import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import ErrorPage from './Pages/Errorpage/Errorpage.js';
import Profile from './Pages/Profile/Profile.js';
import Home from './Pages/Home/Home.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement : <ErrorPage/>,
    children: [{
      path: "/",
    element: <Home />

    },
  {
    path: "/profile/:id",
    element: <Profile/>
  }],
 
    
  }
]);
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
