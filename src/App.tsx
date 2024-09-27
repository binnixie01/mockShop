import {ReactNode } from 'react'

interface AppProps {
  children: ReactNode;
}
const App:React.FC<AppProps>=({children})=>{
  

  return (
    <>
    <main>{children}</main>
     
    </>
  )
}

export default App
