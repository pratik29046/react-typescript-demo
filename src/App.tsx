// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './router/HomePage';
import { PageNotFound } from './router/PageNotFound';
import ProfilePage from './router/ProfilePage';
import { ProfilePages } from './router/ProfilesPages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement : <PageNotFound/>
  },
  {
    path: "/profile",
    element: <ProfilePage /> ,
    errorElement : <PageNotFound/>
  },
  {
    path: "/profiles",
    element: <ProfilePages /> ,
    // children: [
    //   {
    //     path: "/profiles/:profileName",
    //     element: <ProfilePage /> ,
    //     errorElement : <PageNotFound/>
    //   }
    // ],
    errorElement : <PageNotFound/>
  },
  {
    path: "/profiles/:profileName",
    element: <ProfilePage /> ,
    errorElement : <PageNotFound/>
  }
]);

const App: React.FC = () => (
  <RouterProvider router={router} />
);

export default App;
