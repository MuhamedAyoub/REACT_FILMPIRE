import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment, useMediaQuery } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import useStyles from './styles'
import { searchMovie } from '../../slices/GenreCategorySlice'
//! End Import
const Search = () => {
  //* My state
  const theme = useTheme()
  // End state
  console.log('Search')
  const isMobile = useMediaQuery('max-width: 767px')
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const styles = useStyles(theme, isMobile)
  const KeyPressHandler = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query))
    }
  }
  return (
    <div style={styles.searchContainer} >
        <TextField
        onKeyPress={KeyPressHandler}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant='standard'
        style={styles.searchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start' >
              <SearchIcon />
            </InputAdornment>
          )

        }}
         />
    </div>
  )
}

export default Search
