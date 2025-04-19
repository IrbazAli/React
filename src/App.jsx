import { useState } from 'react'
import './App.css'
import useCurrencyExch from './hooks/useCurrencyExch'
import InputBox from './components/InputBox';

function App() {
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('pkr')

  const currencyData = useCurrencyExch(fromCurrency)
  const currencyOptions = Object.keys(currencyData)

  function updateCurr() {
    return currencyData[toCurrency] * fromAmount
  }

  return (
    <>
      {/* <div className="bg-gradient-to-br from-[#1e1e3f] to-[#121229] text-white min-h-screen flex justify-center items-center px-4 py-10"> */}
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-2xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setToAmount(updateCurr())
            }}
          >
            {/* Header */}
            <h1 className="text-3xl font-bold text-center mb-8 text-white tracking-wide">
              Currency Converter 
            </h1>

            {/* From Section */}
            <InputBox
              label="From"
              amount={fromAmount}
              currency={fromCurrency}
              currencyOptions={currencyOptions}
              setAmount={setFromAmount}
              setCurrency={setFromCurrency}
            />

            {/* Swap Button */}
            <div className="flex justify-center my-6">
              <button
                type="button"
                onClick={() => {
                  const temp = fromCurrency
                  setFromCurrency(toCurrency)
                  setToCurrency(temp)
                }}
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 text-white rounded-full shadow-md transition-all duration-300 text-sm font-medium tracking-wide"
              >
                🔄 Swap Currencies
              </button>
            </div>

            {/* To Section */}
            <InputBox
              label="To"
              amount={toAmount}
              currency={toCurrency}
              currencyOptions={currencyOptions}
              setAmount={setToAmount}
              setCurrency={setToCurrency}
              disabled={true}
            />

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-8 py-3 rounded-xl text-white text-lg font-semibold shadow-lg transition-all duration-300"
            >
              Convert {fromCurrency.toUpperCase()} → {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      {/* </div> */}
    </>
  )
}

export default App
