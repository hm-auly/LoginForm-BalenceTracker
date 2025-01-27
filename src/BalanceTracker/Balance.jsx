import React from 'react'

function Balance({balance}) {
  return (
   <>
        <div className='text-center'>
            <h2 className='font-serif text-xl font-semibold'>Your Balnce</h2>
            <p className='font-bold text-2xl '>$ {balance}</p>
        </div>
   </>
  )
}

export default Balance;