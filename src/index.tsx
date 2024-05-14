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
import { LazyRegistration } from './pages/Registration/Registration.lazy'
import { LazyLogin } from './pages/Login/Login.lazy'
import './App.scss'
import { LazyServerPage } from './pages/ServerPage/ServerPage.lazy'
import store from './store/store'
import React, { useState } from "react";


const root = document.getElementById('root')

if (!root) {
  throw new Error('roor not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={'Loading...'}><App/></Suspense>,
  },
  {
    path: "/registration",
    element: <Suspense fallback={'Loading...'}><LazyRegistration/></Suspense>,
  },
  {
    path: "/login",
    element: <Suspense fallback={'Loading...'}><LazyLogin/></Suspense>,
  },
  {
    path: "/restorePassword",
    element: <Suspense fallback={'Loading...'}><LazyRestore/></Suspense>,
  },
  {
    path: "/server/:id",
    element: <Suspense fallback={'Loading...'}><LazyServerPage/></Suspense>,
  },
  {
    path: "/addServer",
    element: <Suspense fallback={'Loading...'}><LazyAddServer/></Suspense>,
  },
  {
    path: "/addServerTwo",
    element: <Suspense fallback={'Loading...'}><LazyAddServerTwo/></Suspense>,
  },
  {
    path: "/addServerThree",
    element: <Suspense fallback={'Loading...'}><LazyAddServerThree/></Suspense>,
  },
  {
    path: "/addServerFour",
    element: <Suspense fallback={'Loading...'}><LazyAddServerFour/></Suspense>,
  },
  {
    path: "/addServerFive",
    element: <Suspense fallback={'Loading...'}><LazyAddServerFive/></Suspense>,
  },
  {
    path: "/*",
    element: <Suspense fallback={'Loading...'}><h1>Error</h1></Suspense>,
  }
])

export const Context = React.createContext({
  store,
})

container.render(
  <Context.Provider value={{
    store
  }}>
    <RouterProvider router={router} />
  </Context.Provider>,

)