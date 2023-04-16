import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Liked } from '../pages/Liked/Liked'
import { Home } from '../pages/Home/Home'
import { Singleproduct } from '../pages/Singleproduct/Singleproduct'
import { Ordering } from '../pages/Ordering/Ordering'
import { Order } from '../pages/Order/Order'
import { ServiceRequirements } from '../pages/ServiceRequirements/ServiceRequirements'
import { Contact } from '../pages/Contact/Contact'

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/liked' element={<Liked/>}/>
        <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
        <Route path='/ordering/product/:id' element={<Ordering/>}/>
        <Route path='/order/product/:id' element={<Order/>}/>
        <Route path='/service-requirement' element={<ServiceRequirements/>}/>
        <Route path='/contacts' element={<Contact/>}/>
    </Routes>
  )
}
