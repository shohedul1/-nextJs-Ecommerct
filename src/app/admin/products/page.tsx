import ProdcutFrom from '@/components/admin-pannal/ProdcutFrom'
import React from 'react'

const page = () => {
  return (
    <div className='h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto'>
        <div className='bg-white w-[500px] rounded-lg p-4'>
            <ProdcutFrom/>
        </div>
        
    </div>
  )
}

export default page