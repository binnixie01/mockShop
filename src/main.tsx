import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './app/apolloClient.ts'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
  <BrowserRouter>
    <App /></BrowserRouter>
    <ToastContainer/>
    </ApolloProvider>
  </StrictMode>,
)
