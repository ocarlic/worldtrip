import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import Carousel from '../components/Carousel'

const Home: NextPage = () => {
  return (
    <>
      <Banner />

      <TravelTypes />

      <Carousel />
    </>
  )
}

export default Home
