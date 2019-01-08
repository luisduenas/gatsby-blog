import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Trebuchet MS",
    "Helvetica",
  ],
  bodyFontFamily: [    
    "Trebuchet MS",
    "Helvetica",
  ],
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
