import { Flex, Box, Image, Text } from '@chakra-ui/react'

export function CardCity() {
  return (
    <Flex
      w={256}
      pt={10}
      flexDirection='column'
    >
      <Image
        src='/assets/images/europa.jpg'
        alt='imagem de ${city}'
        borderRadius='4px 4px 0 0'
      />

      <Flex
        p={[5]}
        justifyContent='space-between'
        align='center'
        border='1px'
        borderRadius='0 0 4px 4px'
      >
        <Box>
          <Text color='gray.700' fontWeight='bold'>Londres</Text>
          <Text color='gray.400'>Reino Unido</Text>
        </Box>

        <Image
          src='/assets/images/reino-unido.png'
          alt='imagem de ${city}'
          w={30}
          h={30}
        />
      </Flex>
    </Flex>
  )
}
