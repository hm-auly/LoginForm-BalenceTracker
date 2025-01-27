import React from 'react'

function TransectionHistory({transections}) {
  return (
    <>
        <ul className='list-none container mx-auto'>
            {transections.map((transection)=>(
                <li key={Math.random()} className={`px-2 py-1 my-3 ${transection.amount > 0 ? "bg-green-100": "bg-red-100"}`}>
                    {transection.text}

                    <span className='float-right'>{transection.amount}</span>
                </li>
            ))

            }
        </ul>
    </>
  )
}

export default TransectionHistory