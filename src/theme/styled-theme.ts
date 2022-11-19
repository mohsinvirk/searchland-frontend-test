import shadows from "../styles/boxShadows"
import colors from "../styles/colors"
const htmlFontSize: number = 16

export const theme = {
  htmlFontSize,

  colors: {
    primary: colors.main.Primary,
    text: colors.main.Text,
    grey200: colors.main.Grey200
  },
  shadows: {
    shadow1: shadows.shadow1
  },
  fontFamily: "Plus Jakarta Sans",
  fontWeights: {
    normal: 400
  },
  fontSizes: {
    sm: "0.875rem" // 14px
  },
}

export default theme
