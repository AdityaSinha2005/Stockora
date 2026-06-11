import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
  return (
    <>
        <Hero />
        <LeftSection imageURL="/media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
        <RightSection imageURL="/media/images/Console.png" productName="Console" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Console experience seamlessly on your Android and iOS devices." learnMore="" />
        <LeftSection imageURL="/media/images/coin.png" productName="Coin" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Coin experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
        <RightSection imageURL="/media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite Connect API experience seamlessly on your Android and iOS devices." learnMore="" />
        <LeftSection imageURL="/media/images/varsity.png" productName="Varsity Mobile" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Varsity experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore="" />
        <p className='text-center mt-5 mb-5'>Want to know more about our technology stack? Check out the Stockora.tech blog.</p>
        <Universe />
    </>
  )
}

export default ProductPage