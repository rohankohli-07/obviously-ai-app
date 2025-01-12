import { Home } from '@/home'
import { AuthLayout } from '@/layouts/AuthLayout'
import { UserProvider } from '@/providers/UserProvider'
import { SignIn } from '@/sign-in'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NotAuthorized } from './not-authorized'

import './output.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<UserProvider />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="not-authorized" element={<NotAuthorized />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
