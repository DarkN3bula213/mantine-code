import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './app/index.tsx'
// import App from './App.tsx'
import RootLayout from './app/layouts/RootLayout.tsx'
import './index.css'

const rootElement = document.getElementById('root')
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RootLayout>
				<Home />
			</RootLayout>
		</StrictMode>,
	)
}
