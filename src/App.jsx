import { useState } from 'react'
import './App.css'
import useCurrencyExch from './hooks/useCurrencyExch'

function App() {
  const currencyData = useCurrencyExch("usd");
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#0f0f3a]">
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-[400px]">
        {/* From Section */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-1">From</label>
          <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-inner">
            <input
              type="number"
              className="w-full bg-transparent outline-none text-gray-800 text-lg"
              defaultValue="0"
            />
            <select className="ml-2 text-gray-800 bg-gray-100 p-1 rounded">
              <option value="usd">usd</option>
              <option value="inr">inr</option>
              <option value="eur">eur</option>
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-2">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
            SWAP
          </button>
        </div>

        {/* To Section */}
        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-1">To</label>
          <div className="flex items-center justify-between bg-white rounded-lg p-2 shadow-inner">
            <input
              type="number"
              className="w-full bg-transparent outline-none text-gray-800 text-lg"
              defaultValue="0"
              readOnly
            />
            <select className="ml-2 text-gray-800 bg-gray-100 p-1 rounded">
              <option value="inr">inr</option>
              <option value="usd">usd</option>
              <option value="eur">eur</option>
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium">
          Convert USD to INR
        </button>
      </div>
    </div>
    </>
    )
  }


  export default App
