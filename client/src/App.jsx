import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Writearticle from './pages/Writearticle'
import BlogTitle from './pages/BlogTitle'
import Layout from './pages/Layout' // Add this line
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import Reviewresume from './pages/Revieresume'
import Community from './pages/community'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'

const App = () => {
 
  return (
    <div>
      <Toaster/>
      <Routes>
<Route path='/' element={<Home/>}/>

<Route path='/ai' element={<Layout/>}>
<Route index element={<Dashboard/>}/>
<Route path='write-article' element={<Writearticle/>}/>
<Route path='blog-titles' element={<BlogTitle/>}/>
<Route path='generate-images' element={<GenerateImages/>}/>
<Route path='remove-background' element={<RemoveBackground/>}/>
<Route path='remove-object' element={<RemoveObject/>}/>
<Route path='review-resume' element={<Reviewresume/>}/>
<Route path='community' element={<Community/>}/>



</Route>

 </Routes>
    </div>
  )
}

export default App
