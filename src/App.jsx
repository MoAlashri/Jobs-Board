import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pagess/Home';
import Jobs from './pagess/Jobs';
import JobDetails from './pagess/JobDetails';
import Login from './pagess/Login';
import Favorites from './pagess/Favorites';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="job/id" element={<JobDetails />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
