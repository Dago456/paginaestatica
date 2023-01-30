import { createTheme, NextUIProvider, Text } from "@nextui-org/react"

export const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
      myDarkColor: '#ff4ecd'
    },
    space: {},
    fonts: {}
  }
})
