import React from 'react'
import useCurrencyExch from '../hooks/useCurrencyExch'

function InputBox(
    label,
    amount = 0,
    setAmount,
    currency = 'usd',
    setCurrency,
    currencyOptions = []

) {
  return (
    <>
     <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1">
            {label}</label>
          <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-inner">
            <input
              type="number"
              className="w-full bg-transparent outline-none text-gray-800 text-lg"
              defaultValue={0}
              value={amount}
              onChange={(e)=>{
                setAmount && setAmount(Number(e.target.value))
              }}
            />
            <select className="ml-2 text-gray-800 bg-gray-100 p-1 rounded">
                for (const currency in currencyOptions) {
                        <option key={currency} value={currency}></option>
                    }
            </select>
          </div>
        </div>
    </>
  )
}

export default InputBox
