import React, { useEffect} from "react";
import kirby from './assets/9cb159ed669f59d43cf2abc56c33f6a4.gif'
import Tools from './Tools'



const Home = () => {
  return (
    <div className='bg-orange-100 h-screen'>
            <img className='w-44 m-auto' src={kirby} alt="kirby" />
        <p className='text-xl text-center'>Hi, my name Mercelory aka big money, React Developer</p>
        <div className='grid grid-rows-3 grid-flow-col gap-2 m-9 text-center flex-wrap lg:grid-rows-1 lg:gap-0 lg:mt-8 lg:mx-64 font-semibold underline '>
            <a>telegram</a>
            <a>linkedin</a>
            <a>github</a>
            <a>pigeon</a>
            <a>mail</a>
            <a>location</a>
        </div>
        <Tools/>
    </div>

  )
}

export default Home