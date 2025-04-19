import React from 'react'
import useCurrencyExch from '../hooks/useCurrencyExch'

function InputBox({
    label,
    amount = 0,
    currency = 'usd',
    currencyOptions = [],
    setAmount,
    setCurrency,
    disabled=false
}
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
                        value={amount}
                        disabled={disabled}
                        onChange={(e) => {
                            setAmount && setAmount(Number(e.target.value))
                        }}
                    />
                    <select
                        className="ml-2 text-gray-800 bg-gray-100 p-1 rounded"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        {currencyOptions.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>

                </div>
            </div >
        </>
    )
}

export default InputBox
