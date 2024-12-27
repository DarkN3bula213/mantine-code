import React from 'react'

import {
	DEFAULT_THEME,
	MantineProvider,
	createTheme,
	mergeMantineTheme,
} from '@mantine/core'

import {
	breakpoints,
	colors,
} from '../../shared/styles/theme'

const theme = mergeMantineTheme(
	DEFAULT_THEME,

	createTheme({
		breakpoints,
		colors,
	}),
)

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<MantineProvider theme={theme} forceColorScheme='dark'>
			{children}
		</MantineProvider>
	)
}
