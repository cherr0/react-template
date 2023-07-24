import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import router from '@/lib/router'
import GlobalStyle from '@/styles/global-style'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
