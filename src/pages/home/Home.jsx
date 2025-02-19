import React from 'react'
import Banner from './Banner'
import Topsell from '../Topsell'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <>
    <Banner />
    <Topsell />
    <Recommended />
    <News />
    </>
  )
}

export default Home