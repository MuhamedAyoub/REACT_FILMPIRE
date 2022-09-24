
export default (theme, isMobile) => {
  const searchContainer = {}
  const searchInput = {}
  if (isMobile) {
    searchContainer.display = 'flex'
    searchContainer.justifyContent = 'center'
    searchContainer.width = '100%'
    searchInput.marginTop = '-10px'
    searchInput.marginBottom = '10px'
  }
  return {
    searchContainer: {
      ...searchContainer
    },
    searchInput: {
      color: theme.palette.mode === 'light' && 'black',
      filter: theme.palette.mode === 'light' && 'invert(1)'
    }

  }
}
