import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context'
import SignUpPage from './pages/SignUpPage'

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/sign-up' element={<SignUpPage/>}/>
        </Routes>
      </AuthProvider>
    </div>
  )
}
