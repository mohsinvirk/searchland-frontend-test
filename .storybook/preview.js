import "@fontsource/plus-jakarta-sans"
import { CssBaseline } from "@mui/material"
import ThemeProvider from "../src/theme/ThemeProvider"

export const withMuiTheme = (Story) => (
  <ThemeProvider>
    <CssBaseline />
    <Story />
  </ThemeProvider>
)

export const decorators = [withMuiTheme]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
