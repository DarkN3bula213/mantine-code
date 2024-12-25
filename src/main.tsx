import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import RootLayout from './app/layouts/RootLayout.tsx'
import Home from './app/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout>
      <Home/>
    </RootLayout>
  </StrictMode>,
)
