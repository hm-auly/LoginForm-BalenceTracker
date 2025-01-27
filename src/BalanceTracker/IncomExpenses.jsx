import React from 'react'

function IncomExpenses({income, expenses}) {
  return (
    <>
        <div className='flex justify-around'>
            <div className='text-green-500'>
                <h3 className='font-serif'>Total Income</h3>
                <p>$ {income}</p>
            </div>
            <div className='text-red-500'>
                <h3 className='font-serif'>Expenses</h3>
                <p>$ {expenses}</p>
            </div>
        </div>
    </>
  )
}

export default IncomExpenses;