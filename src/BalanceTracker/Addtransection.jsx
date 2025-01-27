import React, { useState } from 'react'

function Addtransection({addtransection}) {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const Handlesubmit = (e)=>{
        e.preventDefault();

        if(text === "" || amount === 0) return;

        addtransection({text, amount: +amount});

        setAmount(0);
        setText("")
    }

  return (
    <>
        <div className='text-center'>
            <form onSubmit={Handlesubmit}>
                <div>
                    <input type="text" placeholder='Enter Yout Description' className='border border-gray-500 rounded-md p-1 ' value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
                <div>
                    <input type="number" placeholder='Enter the Amount' className='border border-gray-500 rounded-md p-1 my-4' value={amount} onChange={(e)=> setAmount(e.target.value)}  />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md font-serif text-white'>Add TRansection</button>
            </form>
        </div>
    </>
  )
}

export default Addtransection;