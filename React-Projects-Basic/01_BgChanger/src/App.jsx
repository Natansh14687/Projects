import { useState } from 'react'


function App() {
  const [color, setColor] = useState("#964B00");



  return (
    <>
      <div className='h-screen w-full' style={{backgroundColor : color}}>
        <div className='fixed bottom-16 flex justify-center flex-wrap w-full'>
          <div className='bg-slate-300 flex gap-3 flex-wrap p-4 rounded-2xl'>
            <div className='bg-red-600 p-4 rounded-3xl cursor-pointer' onClick={() => setColor("red")}>Red</div>
            <div className='bg-green-600 p-4 rounded-3xl cursor-pointer' onClick={()=>setColor("green")}>Green</div>
            <div className='bg-blue-600 p-4 rounded-3xl cursor-pointer' onClick={() => setColor("blue")}>Blue</div>
            <div className='bg-orange-600 p-4 rounded-3xl cursor-pointer' onClick={()=>setColor("orange")}>Orange</div>
            <div className='bg-black p-4 rounded-3xl cursor-pointer' onClick={()=>setColor("black")}>Black</div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
