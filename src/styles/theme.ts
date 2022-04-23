import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    highlight: {
      "900": 'FFBA08',
    },
    dark: {
      "900": '000000',
      "700": '47585B',
      "400": '999999',
    },
    light: {
      "900": 'FFFFFF',
      "700": 'F5F8FA',
      "400": 'DADADA',
    },
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'light.400',
        color: 'dark.700'
      }
    }
  }
})