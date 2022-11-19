import { grey } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
import shadows from "../styles/boxShadows"
import colors from "../styles/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: colors.main.Primary,
      dark: colors.dark.Primary
    },
    grey: {
      ...grey,
      200: "#efefef"
    }
  },
  typography: {
    fontFamily: "Plus Jakarta Sans"
  },
  components: {
    /**
     * Override MUi Card styles
     */
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.main.White,
          border: `1px solid ${colors.main.Grey200}`,
          borderRadius: 10,
        }
      }
    }
  }
})

export default theme
