import { Stack, Flex, Box, Image, Text, useBreakpointValue } from '@chakra-ui/react'

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Box>
      <Stack
        direction={['column', 'column', 'row']}
        py={[20]}
        pr={[5, 10, 120]}
        pl={[5, 10, 120]}
        justifyContent='space-between'
      >
        <Flex
          flexDirection='column'
          alignItems='center'
        >
          { isWideVersion && (
            <Image
              src='assets/images/Cocktail.png'
              alt='Drink com uma fruta'
            />
          )}

          <Text
            pt='5'
            fontWeight='bold'
            color='gray.700'
          >
            vida noturna
          </Text>
        </Flex>


        <Flex
          flexDirection='column'
          alignItems='center'
        >
          { isWideVersion && (
            <Image
              src='assets/images/Surf.png'
              alt='Drink com uma fruta'
            />
          )}

          <Text
            pt='5'
            fontWeight='bold'
            color='gray.700'
          >
            praia
          </Text>
        </Flex>


        <Flex
          flexDirection='column'
          alignItems='center'
        >
          { isWideVersion && (
            <Image
              src='assets/images/Building.png'
              alt='Drink com uma fruta'
            />
          )}

          <Text
            pt='5'
            fontWeight='bold'
            color='gray.700'
          >
            moderno
          </Text>
        </Flex>

        <Flex
          flexDirection='column'
          alignItems='center'
        >
          { isWideVersion && (
            <Image
              src='assets/images/Museum.png'
              alt='Drink com uma fruta'
            />
          )}

          <Text
            pt='5'
            fontWeight='bold'
            color='gray.700'
          >
            clássico
          </Text>
        </Flex>

        <Flex
          flexDirection='column'
          alignItems='center'
        >
          { isWideVersion && (
            <Image
              src='assets/images/Earth.png'
              alt='Drink com uma fruta'
            />
          )}

          <Text
            pt='5'
            fontWeight='bold'
            color='gray.700'
          >
            e mais...
          </Text>
        </Flex>
      </Stack>

      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        fontSize={36}
        pb={20}
      >
        <Text color='gray.700'>Vamos nessa?</Text>
        <Text color='gray.700'>Então escolha seu continente</Text>
      </Flex>
    </Box>
  )
}
