import { Image, Box, Text } from '@chakra-ui/react'
import { firstCaracterUpperCase } from '../../utils/functions'

interface ICountrisBanner {
  title: string;
  urlImage: string;
}

export function CountriesBanner({ title, urlImage }: ICountrisBanner) {
  return (
    <Box
      position='relative'
      h={[163, 450]}
    >
      <Image
        w='100%'
        h={[163, 450]}
        src={urlImage}
        alt={`Imagem do continente ${title}`}
        objectFit='cover'
        position='absolute'
        opacity='0.8'
      />

      <Text
        position='absolute'
        fontWeight='bold'
        color='white  '
        fontSize={['2xl', '4xl', '6xl']}
        pr={[5, 10, 120]}
        pl={[5, 10, 120]}
        bottom='10'
      >
        {firstCaracterUpperCase(title)}
      </Text>
    </Box>
  )
}
