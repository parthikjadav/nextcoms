import React, { ReactNode } from 'react'

const Container = ({children}:{children:ReactNode}) => {
  return (
    <div className='mx-auto p-5 px-8'>
        {children}
    </div>
  )
}

export default Container