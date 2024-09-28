import {ReactNode } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface AppProps {
  children: ReactNode;
}
const App:React.FC<AppProps>=({children})=>{
  

  return (
    <><div className='flex justify-between px-5 mt-4'>
    <div className='text-5xl'>Mock Shop</div><div><button><ShoppingCartIcon/></button></div></div>
    <main>{children}</main>
     
    </>
  )
}

export default App
