import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Routes'
import AuthProvider from './Context/AuthProvider'

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </>
  )
}

export default App
