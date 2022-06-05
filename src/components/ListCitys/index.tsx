import { HStack, Text } from '@chakra-ui/react'
import { CardCity } from '../CardCity'

export function ListCitys() {
  return (
    <>
      <Text
        as='h2'
        fontSize={36}
        fontWeight='bold'
        color='gray.700'
      >
        Cidades
      </Text>

      <HStack
        py={10}
        flexWrap='wrap'
        justifyContent={['center', 'center', 'space-between']}
      >
        {[0, 1, 2, 3, 4].map(city => (
          <CardCity key={city} />
        ))}
      </HStack>
    </>
  )
}
