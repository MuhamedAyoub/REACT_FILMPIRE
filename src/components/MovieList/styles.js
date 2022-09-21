export default (isMobile) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: isMobile ? 'center' : 'space-between',
    overflow: 'auto'

  },
  links: {
    alignItems: 'center',
    fontWeight: 'bold'

  }

})

