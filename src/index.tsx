import {createRoot} from 'react-dom/client'
import {App} from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LazyRestore } from './pages/Restore/Restore.lazy'
import { LazyAddServer } from './pages/AddServer/AddServer.lazy'
import { LazyAddServer2 } from './pages/AddServer/AddServer2.lazy'
import { LazyAddServer3 } from './pages/AddServer/AddServer3.lazy'
import { LazyAddServer4 } from './pages/AddServer/AddServer4.lazy'
import { LazyAddServer5 } from './pages/AddServer/AddServer5.lazy'
import { Suspense } from 'react'
import Registration from './pages/Registration/Registration'
import { LazyRegistration } from './pages/Registration/Registration.lazy'
import { LazyLogin } from './pages/Login/Login.lazy'
import './App.scss'

const root = document.getElementById('root')

if (!root) {
  throw new Error('roor not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Suspense fallback={'loading'}><LazyRegistration/></Suspense>,
  },
  {
    path: "/login",
    element: <Suspense fallback={'loading'}><LazyLogin/></Suspense>,
  },
  {
    path: "/restorePassword",
    element: <Suspense fallback={'loading'}><LazyRestore/></Suspense>,
  },
  {
    path: "/server/:id",
    element: <Suspense fallback={'loading'}><h1>server</h1></Suspense>,
  },
  {
    path: "/addServer",
    element: <Suspense fallback={'loading'}><LazyAddServer/></Suspense>,
  },
  {
    path: "/addServer/2",
    element: <Suspense fallback={'loading'}><LazyAddServer2/></Suspense>,
  },
  {
    path: "/addServer/3",
    element: <Suspense fallback={'loading'}><LazyAddServer3/></Suspense>,
  },
  {
    path: "/addServer/4",
    element: <Suspense fallback={'loading'}><LazyAddServer4/></Suspense>,
  },
  {
    path: "/addServer/5",
    element: <Suspense fallback={'loading'}><LazyAddServer5/></Suspense>,
  },
  {
    path: "/*",
    element: <Suspense fallback={'loading'}><h1>Error</h1></Suspense>,
  }
])

container.render(
  <RouterProvider router={router} />
)