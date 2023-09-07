import './App.css'
import React, { useState } from 'react'
import Inputbox from './components/Inputbox'
import useCurrencyInfo from './hooks/userCurrencyinfo'

function App() {
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState("usd");
  const [to,setTO]=useState("inr");
  const [covertedAmount,setConvetrtedAmount]=useState(0);
  
  const currencyinfo=useCurrencyInfo(from);
  const option=Object.keys(currencyinfo);
  const convert=()=>{
    setConvetrtedAmount(amount*currencyinfo[to]);
  }
  return(
    <div>
      <h1>App With cahi</h1>
      <form onSubmit={
        (e)=>{
          e.preventDefault();
          convert();
        }
        
      }>
        <Inputbox topText='From' amount={amount} currencyOption={option} onCurrencyChange={(currency)=>{
          setFrom(currency)
        }}
        selectCurrency={from}
        onAmountChange={(amount)=>{
          setAmount(amount)
        }}
        />
        <Inputbox topText='To' amount={covertedAmount} currencyOption={option} onCurrencyChange={(currency)=>(setTO(currency)) }
        selectCurrency={to} amountDisable={true} onAmountChange={(amount)=>{
          setAmount(amount)
        }}/>
        <button type='submit'>Convert{`${from} to ${to}`}</button>
      </form>
    </div>
      
  )
}

export default App
