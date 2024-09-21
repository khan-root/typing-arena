import React from 'react'
import ParaSelection from './ParaSelection'
import Para from './Para'

const Main = () => {
  return (
    <div className='flex flex-col gap-4'>
        <ParaSelection />
        <Para />
    </div>
  )
}

export default Main