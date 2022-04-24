import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": '#000000',
      "700": '#47585B',
      "400": '#999999',
      "300": '#FFFFFF',
      "200": '#F5F8FA',
      "100": '#DADADA',
    },
    yellow: {
      "500": '#FFBA08'
    }
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif'
  },
})
