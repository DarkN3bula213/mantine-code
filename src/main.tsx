import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
	RouterProvider,
	createRouter,
} from '@tanstack/react-router'

import RootLayout from './app/layouts/RootLayout'
// import Home from './app/index.tsx';
// import App from './App.tsx'
// import RootLayout from './app/layouts/RootLayout.tsx';
import './index.css'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById('root')
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RootLayout>
				<RouterProvider router={router} />
			</RootLayout>
		</StrictMode>,
	)
}
