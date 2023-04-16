import React from 'react'
import { Header } from './components/Header/Header'
import { Router } from './router/RouterLinks';
import { Footer } from './components/Footer/Footer';
export const App = () => {
  return (
   <>
    <Header/>
    <Router/>
    <Footer/>
    </>
  )
}
