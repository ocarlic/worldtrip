import { GetStaticProps } from 'next'
import { Flex } from '@chakra-ui/react'

import { CountriesBanner } from '../../components/CountriesBanner'
import { Wrapper } from '../../components/Wrapper'
import { InfoContinent } from '../../components/InfoContinent';
import { ListCitys } from '../../components/ListCitys';

interface ICountrie {
  continent: {
    slug: string;
  };
  urlImage: string;
}

export default function Continents({ continent, urlImage }: ICountrie) {
  return (
    <Flex flexDirection='column'>
      <CountriesBanner title={continent.slug} urlImage={urlImage} />

      <Wrapper>
        <InfoContinent />

        <ListCitys />
      </Wrapper>
    </Flex>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params

  return {
    props: {
      continent: slug,
      urlImage: `/assets/images/${slug?.slug}.jpg`
    }
  }
}
