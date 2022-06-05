import { Box, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <Box
      pr={[5, 10, 120]}
      pl={[5, 10, 120]}
      pb={[5, 10, 120]}
    >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Link href='/continents/europa' passHref>
            <Box
              position='relative'
            >
              <Image
                height={450}
                width='100%'
                src='/assets/images/europa.jpg'
                alt='europa'
                objectFit='cover'
              />
              <Text
                width='100%'
                textAlign='center'
                position='absolute'
                top='40%'
                fontWeight='bold'
                color='gray.200'
                fontSize={['2xl', '4xl', '6xl']}
              >
                Europa
              </Text>

              <Text
                width='100%'
                textAlign='center'
                position='absolute'
                fontWeight='bold'
                color='gray.200'
                top='60%'
              >
                O Continente mais antigo
              </Text>
            </Box>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Carousel
