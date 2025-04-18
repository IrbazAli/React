import { useEffect, useState, useRef, useCallback} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(14)
  const [character,setCharacter]=useState(false)
  const [number,setNumber]=useState(false)
  const [password,setPassword]=useState("")
  const ref=useRef(null)

  useEffect(()=>{
    let pass=''  
    let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      if(character){
        str+="!@#$%&-_\?/~"
      }
      if(number){
        str+="0123456789"
      }

      for (let index = 1; index <= length; index++) {
        const char=Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }
      setPassword(pass);
  },[length,character,number]) 

  const changeNumState=useCallback((prev)=>{
    setNumber(prev=>!prev)
  })
  
  const changeCharState=useCallback((prev)=>{
    setCharacter(prev=>!prev)
  })

  const copyClipboard=useCallback(()=>{
    ref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
     <div className='min-h-screen bg-gray-400 flex flex-col items-center justify-center p-8 space-y-6'>

<h1 className="text-3xl font-bold text-gray-800">Password Generator</h1>

<div className="flex items-center w-full max-w-md">
  <input
    className='bg-blue-300 w-full py-2 px-4 rounded-l-lg text-black text-lg'
    type="text"
    placeholder='Password'
    value={password}
    readOnly
    ref={ref}
  />
  <button
    className='rounded-r-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700 cursor-pointer h-full'
    onClick={copyClipboard}
  >
    Copy
  </button>
</div>

<div className="flex flex-col gap-4 items-start w-full max-w-md">
  <div className="w-full">
    <label htmlFor="length" className="block font-medium mb-1">Length: {length}</label>
    <input
      id="length"
      type="range"
      min={4}
      max={16}
      value={length}
      onChange={(e) => setLength(e.target.value)}
      className="w-full accent-green-600"
    />
  </div>

  <div className="flex items-center gap-2">
    <input id='number' type="checkbox" onChange={changeNumState} />
    <label htmlFor="number" className="text-lg">Include Numbers</label>
  </div>

  <div className="flex items-center gap-2">
    <input id='character' type="checkbox" onChange={changeCharState} />
    <label htmlFor="character" className="text-lg">Include Special Characters</label>
  </div>
</div>

</div>

    </>
  )
}

export default App
