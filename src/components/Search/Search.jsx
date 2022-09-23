import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment } from '@mui/material'
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

  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const styles = useStyles(theme)
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
        InputProps={{
          className: styles.searchInput,
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
