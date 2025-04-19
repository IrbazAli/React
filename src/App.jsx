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
       

        {/* Swap Button */}
        <div className="flex justify-center my-2">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition">
            SWAP
          </button>
        </div>

        {/* To Section */}
       
          </div>
        </div>

        {/* Convert Button */}
        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg font-medium">
          Convert USD to INR
        </button>
      
    
    </>
    )
  }


  export default App
