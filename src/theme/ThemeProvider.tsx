import React from "react"
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles"
import styled, { ThemeProvider as StylesThemeProvider } from "styled-components"

import type { ReactNode } from "react"

import muiTheme from "./mui-theme"
import styledTheme from "./styled-theme"

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StylesThemeProvider theme={styledTheme}>
      <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>
    </StylesThemeProvider>
  )
}

export default ThemeProvider
