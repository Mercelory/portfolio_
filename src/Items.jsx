import React from 'react'
import pen from '../src/assets/pen.svg'
import bucket from '../src/assets/color-bucket.svg'
import eraser from '../src/assets/erase.svg'
import ColorContainer from './ColorContainer'



const Items = () => {
  return (
        <div className='bg-orange-200 p-1 w-full h-26 m-auto rounded-full inset-x-0 bottom-0 fixed translate-y-1'>
          <div className= 'm-auto flex justify-center'>
       <button className='mx-3'><img src={pen} alt="pen"/></button>
       <button className='mx-1'><img src={bucket} alt="pen"/></button>
       <button className='mx-3'><img src={eraser} alt="pen"/></button>
       <ColorContainer />
       </div>
    </div>
    
  )
}

export default Items