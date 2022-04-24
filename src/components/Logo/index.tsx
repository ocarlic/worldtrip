import { Image } from '@chakra-ui/react'

export function Logo() {
  return (
    <Image
      w={[81, 200]}
      h={[22, 46]}
      m='0 auto'
      src='assets/images/logo.jpg'
      alt='Logo worldtrip'
    />
  )
}
