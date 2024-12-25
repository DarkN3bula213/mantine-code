import {
    createTheme,
    DEFAULT_THEME,
    MantineProvider,
    mergeMantineTheme,
} from "@mantine/core";
import { breakpoints, colors } from "../../shared/styles/theme";
import React from "react";

const theme = mergeMantineTheme(
    DEFAULT_THEME,
    
    createTheme({
        

        breakpoints,
        colors,
    }),
);


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <MantineProvider theme={theme} forceColorScheme='dark' >{children}</MantineProvider>
}