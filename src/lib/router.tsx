import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import About from '@/pages/about'
import Home from '@/pages/home'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
])
