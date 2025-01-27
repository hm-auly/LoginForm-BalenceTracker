import React, { useState } from 'react'
import Heder from './Heder'
import Balance from './Balance'
import IncomExpenses from './IncomExpenses'
import Addtransection from './Addtransection'
import TransectionHistory from './TransectionHistory'

function ContainerBalance() {
    const [transections, setTransection] = useState([])

    const addtransection = (transection)=>{
        setTransection([...transections, transection])
    }

    const calculetBalance = ()=>{
        return transections.reduce((acc, transection)=> acc + transection.amount, 0)
    }

    const calculetIncome = ()=>{
        return transections
        .filter((transection)=> transection.amount > 0)
        .reduce((acc, transection)=> acc + transection.amount, 0)
    }

    const calculetExpenses = ()=>{
        return transections
        .filter((transection)=> transection.amount < 0)
        .reduce((acc, transection) => acc + transection.amount, 0)
    }

  return (
        <>
            <Heder />
            <Balance balance={calculetBalance()}/>
            <IncomExpenses income={calculetIncome()} expenses={calculetExpenses()}/>
            <TransectionHistory transections={transections}/> 
            <Addtransection addtransection={addtransection}/>
        </>
  )
}

export default ContainerBalance