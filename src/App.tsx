import {ReactNode } from 'react'

interface AppProps {
  children: ReactNode;
}
const App:React.FC<AppProps>=({children})=>{
  

  return (
    <>
    <div className='text-5xl text-center'>Mock Shop</div>
    <main>{children}</main>
     
    </>
  )
}

export default App
