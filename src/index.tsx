import {createRoot} from 'react-dom/client'
import {App} from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LazyAbout } from './pages/About/About.lazy'
import { LazyShop } from './pages/Shop/Shop.lazy'
import { Suspense } from 'react'
import Registration from './pages/Registration/Registration'
import { LazyRegistration } from './pages/Registration/Registration.lazy'
import { LazyLogin } from './pages/Login/Login.lazy'

const root = document.getElementById('root')

if (!root) {
  throw new Error('roor not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={'loading'}><LazyAbout/></Suspense>,
      },
    ]
  },
  {
    path: "/registration",
    element: <Suspense fallback={'loading'}><LazyRegistration/></Suspense>,
  },
  {
    path: "/login",
    element: <Suspense fallback={'loading'}><LazyLogin/></Suspense>,
  }
])

container.render(
  <RouterProvider router={router} />
)