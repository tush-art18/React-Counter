import './App.css'
import { useState } from 'react';

function App()
{
  const [x, setX] = useState(0)
  // function increase()
  // {
  //   setX(x+1)
  //   console.log(x)
  // }
  // function decrease()
  // {
  //   setX(x-1)
  //   console.log(x)
  // }
  const [t, setT] = useState("")


  return(
    <div className='p-1 border rounded-2xl back '>
      <h1 color='white '>Animated Counter</h1>
      <p>{x}</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 m-auto max-lg max-w-5xl gap-5'>
        <button className='p-3 border bg-[#FEC868] rounded-2xl' onClick={()=>setX(x-1)}>Decrease</button>
        <button className='p-3 border bg-blue-400 rounded-2xl' onClick={()=>setX(x+1)}>Increase</button>
        <button className='p-3 border bg-[#FDA769] rounded-2xl' onClick={()=>setX(0)}>Reset</button>
      </div>
    </div>
  )
}
export default App