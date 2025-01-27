import React, { useState } from 'react'

function LoginForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const [submitedData, setSubmitedData] = useState({
        name: "",
        email: ""
    })

    const HandleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((predet)=>({
            ...predet,
            [name]:value
        }))

    }

    const submited = (e)=>{
        e.preventDefault();

        setSubmitedData(formData)
    }

  return (
    <>
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            <div className='w-full p-10 max-w-md bg-white rounded-md shadow-sm'>
                <h1 className='text-2xl font-serif font-bold text-center mb-5'>Login Form</h1>
                <form onSubmit={submited}>
                    <div>
                        <label className='font-serif' htmlFor="name">Name: </label>
                        <input type="text" placeholder='Enter Your Name'  className='border border-gray-500 block p-1 rounded-md my-1 w-full ' onChange={HandleChange} name="name" value={formData.name} />
                    </div>
                    <div className='mt-2'>
                        <label className='font-serif' htmlFor="email">Email: </label>
                        <input type="email" placeholder='Enter Your Email'  className='border border-gray-500 block p-1 rounded-md my-1 mb-3 w-full' onChange={HandleChange} name="email" value={formData.email}  />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded-md w-full'>Submit</button>
                </form>

                <div className='mt-5 mb-3'>
                    <h1 className='text-xl font-serif text-center'>Information</h1>
                    <p>Name: {submitedData.name}</p>
                    <p>Email: {submitedData.email}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginForm;