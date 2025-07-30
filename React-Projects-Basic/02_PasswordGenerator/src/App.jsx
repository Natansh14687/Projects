import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str+="1234567890";
    if(charactersAllowed) str+="!@#$%^&*()~_+-={}[]:";'<>?,./';

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass+=str.charAt(char);
    }

    setPassword(pass);
  },[length, numbersAllowed, charactersAllowed, setPassword])


  useEffect(()=>{
    passwordGenerator();
  },[length, numbersAllowed, charactersAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  })
  return (
    <>
      <div className='bg-gray-700 text-orange-500 py-5 px-8 rounded-2xl'>
        <h1 className='text-white font-extrabold'>Password Generator</h1>
        <div className='flex my-5'>
          <input type="text" readOnly value={password} ref={passwordRef} className='bg-white py-3 rounded-tl-xl rounded-bl-xl w-full font-bold text-2xl focus-visible:outline-none' />
          <button onClick={copyPasswordToClipboard} className='bg-orange-500 text-white px-4 py-2 rounded-tr-xl rounded-br-xl font-semibold hover:bg-orange-600 transition'>Copy</button>
        </div>
        <div className='flex font-bold text-xl justify-between'>
          <div className='flex gap-1'>
            <input type="range" onChange={(e)=>{setLength(e.target.value)}} name="" id="" value={length} min={8} max={100} className='cursor-pointer accent-orange-500' />
            <div>Length({length})</div>
          </div>
          <div>
            <input type="checkbox" className='cursor-pointer' onChange={()=>{setNumbersAllowed((prev)=>!prev)}} name="" id="numbersAllowed" /><label htmlFor="numbersAllowed" className='cursor-pointer'> Numbers</label>
          </div>
          <div>
            <input type="checkbox" className='cursor-pointer' onChange={()=>{setCharactersAllowed((prev)=>!prev)}} name="" id="charactersAllowed" /><label htmlFor="charactersAllowed" className='cursor-pointer'> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
