import './App.css';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Jobs from './pages/Jobs.jsx';
import AddJob from './pages/AddJob.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import JobPage from './pages/JobPage.jsx';


const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path='/' element = {<MainLayout/>}>
        <Route index element = {<HomePage />}/>
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/:id' element={<JobPage />} />
        <Route path='/add-job' element={<AddJob />} />
      </Route>
      
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}

export default App;