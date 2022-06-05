import { GetStaticProps } from 'next'
import { Flex } from '@chakra-ui/react'

import { CountriesBanner } from '../../components/CountriesBanner'
import { Wrapper } from '../../components/Wrapper'

interface ICountrie {
  slug: string;
}

export default function Continent({ slug }: ICountrie) {
  console.log('slugggg: ', slug)
  return (
    <Flex>
      {/* <CountriesBanner title={slug} img={slug} /> */}

      <Wrapper>
        <h1>content do countriessssss</h1>
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

  try {
    const slug = params;

    if (!slug) {
      return { notFound: true };
    }

    const continent = {
      place: params?.slug
    }

    return { props: { continent } };
  } catch(err) {
    return { notFound: true };
  }
}
