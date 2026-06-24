import React from 'react'

function Container({children}) {
  return (
    <div className='container w-10/12 mx-auto'>
        {children}
    </div>
  )
}

export default Container