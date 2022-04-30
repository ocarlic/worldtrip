import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Banner />

      <TravelTypes />
    </>
  )
}

export default Home
