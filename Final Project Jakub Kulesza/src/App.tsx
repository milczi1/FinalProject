import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { EmployeesPage } from './pages/EmployeesPage'
import { DetailsPage } from './pages/DetailsPage';
import { AddPage } from './pages/AddPage';
import { EditPage } from './pages/EditPage';
import { LanguageSelector } from './components/LanguageSelector';
import { BackButton } from './components/BackButton';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EmployeesPage />
  },
  {
    path: '/details/:id',
    element: <DetailsPage />
  },
  {
    path: '/add',
    element: <AddPage />
  },
  {
    path: '/edit/:id',
    element: <EditPage />
  }
]);



function App() {
  return (
    <>
      <nav className='navbar bg-primary-subtle'>
          <div className='container d-flex justify-content-between align-items-center'>
            <BackButton />
            <LanguageSelector />
          </div>
   
      </nav>
      <main className='container'>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
