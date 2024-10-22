import React from 'react'
import style from './App.module.css'
import Navbar from '../navbar/navbar'
import Home from '../home/home'
import AboutMe from '../aboutme/aboutme'
import Skills from '../skills/skills'
import Works from '../works/works'
import Contact from '../contact/contact'
import { Box } from '@mui/material'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
      <Box className={style['box']}>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutMe/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Box>
  )
}

export default App