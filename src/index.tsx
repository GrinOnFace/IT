import {createRoot} from 'react-dom/client'
import {App} from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LazyRestore } from './pages/Restore/Restore.lazy'
import { LazyAddServer } from './pages/AddServer/AddServer.lazy'
import { LazyAddServerTwo } from './pages/AddServerTwo/AddServerTwo.lazy'
import { LazyAddServerThree } from './pages/AddServerThree/AddServerThree.lazy'
import { LazyAddServerFour } from './pages/AddServerFour/AddServerFour.lazy'
import { LazyAddServerFive } from './pages/AddServerFive/AddServerFive.lazy'
import { Suspense } from 'react'
import Registration from './pages/Registration/Registration'
import { LazyRegistration } from './pages/Registration/Registration.lazy'
import { LazyLogin } from './pages/Login/Login.lazy'
import './App.scss'
import { LazyServerPage } from './pages/ServerPage/ServerPage.lazy'


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
    element: <Suspense fallback={'loading'}><LazyServerPage/></Suspense>,
  },
  {
    path: "/addServer",
    element: <Suspense fallback={'loading'}><LazyAddServer/></Suspense>,
  },
  {
    path: "/addServerTwo",
    element: <Suspense fallback={'loading'}><LazyAddServerTwo/></Suspense>,
  },
  {
    path: "/addServerThree",
    element: <Suspense fallback={'loading'}><LazyAddServerThree/></Suspense>,
  },
  {
    path: "/addServerFour",
    element: <Suspense fallback={'loading'}><LazyAddServerFour/></Suspense>,
  },
  {
    path: "/addServerFive",
    element: <Suspense fallback={'loading'}><LazyAddServerFive/></Suspense>,
  },
  {
    path: "/*",
    element: <Suspense fallback={'loading'}><h1>Error</h1></Suspense>,
  }
])

container.render(
  <RouterProvider router={router} />
)