import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Actors from './pages/Actors'
import Movies from './pages/Movies'
import useStyles from './styles/styles'
import NavBar from './components/NavBar/NavBar'
import Sidenav from './components/NavBar/Sidenav'
// import { Provider } from '@react-redux'
import MoviesInfo from './pages/MoviesInfo/MoviesInfo'

function App () {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)
  return (

    <div style={classes.root}>
      <CssBaseline />
     <Sidenav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main style={classes.container}>
      <NavBar setMobileOpen={setMobileOpen} />
        <div style={classes.toolbar}>

          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/movie/:id" element={<MoviesInfo/>} />
          </Routes>
        </div>
      </main>

    </div>
  )
}

export default App
