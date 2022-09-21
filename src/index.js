/*
This is rules
*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App'
import './styles/index.css'
import { Provider } from 'react-redux'
import store from './app/store'
const theme = createTheme({})
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>
    </Provider>
)
