import React from 'react'
import Navbar from './Modules/layout/Navbar'
import HeroSection from './Modules/Homepage/Homepage'
import MasterclassPage from './Modules/Homepage/Whysection'
import WhyAISection from './Modules/Homepage/WhyAISection'
import WhyChooseBM from './Modules/Homepage/WhyChooseBM'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroSection/>
      <MasterclassPage/>
      <WhyAISection/>
      <WhyChooseBM/>
    </div>
  )
}

export default App