
export default (theme) => ({
  imageLink: {
    display: 'flex',
    justifyContent: 'center',
    paddding: '10% 0'
  },
  image: {
    width: '70%'
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: 'none'

  },
  genreImages: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invariant(1)'
  }
})
