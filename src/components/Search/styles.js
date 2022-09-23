import { useMediaQuery } from '@mui/material'
const searchInput = {}

const isMobile = useMediaQuery('max-width:767px')
const searchContainer = {}
if (isMobile) {
  searchContainer.display = 'flex'
  searchContainer.justifyContent = 'center'
  searchContainer.width = '100%'
  searchInput.marginTop = '-10px'
  searchInput.marginBottom = '10px'
}
export default (theme) => ({
  searchContainer: {
    ...searchContainer
  },
  searchInput: {
    color: theme.palette.mode === 'light' && 'black',
    filter: theme.palette.mode === 'light' && 'invert(1)'
  }

})
