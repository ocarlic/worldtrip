import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true
  })

  return (
    <Box
      w='100%'
      h='335'
      position='relative'
    >
      <Image
        w='100%'
        h={[163, 335]}
        src='assets/images/Banner.jpg'
        alt='céu com estrelas'
        objectFit='cover'
        position='absolute'
      />

      <Box
        pr={[5, 10, 120]}
        pl={[5, 10, 120]}
      >
        <Text
          pt={[15, 20, 20]}
          position='absolute'
          fontWeight='bold'
          color='gray.200'
          fontSize={['2xl', '4xl', '6xl']}
        >
          5 Continentes,
        </Text>

        <Text
          top={[12, 32, 36]}
          position='absolute'
          fontWeight='bold'
          color='gray.200'
          fontSize={['2xl', '4xl', '6xl']}
        >
          infinitas possibilidades.
        </Text>

        <Text
          top={[24, 48, 60]}
          position='absolute'
          color='gray.200'
          fontSize={[14, 20]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>

        { isWideVersion && (
          <Image
            w='420'
            h='270'
            pr={10}
            src='assets/images/Airplane.png'
            alt='avião com núvens'
            objectFit='cover'
            position='absolute'
            bottom='-30'
            right='15'
          />
        )}
      </Box>
    </Box>
  )
}
