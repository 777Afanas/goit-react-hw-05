// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './App.css'



export default function App() {
  return (
    <div>
      <Navigation /> 
      
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          
      </Routes>
      </Suspense> 
    </div>
  );
}