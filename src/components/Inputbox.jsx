import React from 'react'

export default function Inputbox({
    topText="Enter Top Text",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false
}) {
  return (
    <div>
      <p>{topText}</p>
      <div>
        <input type="number" name="curVal" id="cur-input" value={amount} disabled={amountDisable} onChange={(e)=>{
            onAmountChange && onAmountChange(Number(e.target.value));
        }} />
        <select name="curOption" id="cur-option" disabled={currencyDisable} value={selectCurrency} onChange={(e)=>{
            onCurrencyChange(e.target.value)

        }}>
            {currencyOption.map((val,index)=><option value={val} key={index}>{val}</option>)}
            
        </select>
      </div>
    </div>
  )
}
