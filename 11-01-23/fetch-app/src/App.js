import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import Addresses from './components/Addresses';
import Appliances from './components/Appliances';
import Banks from './components/Banks';
import CreditCards from './components/CreditCards';



export default function App() {
  return (
    <div>
      <Addresses/>
      <Banks/>
      <Appliances/>
      <CreditCards/>
    </div>
  )
}
