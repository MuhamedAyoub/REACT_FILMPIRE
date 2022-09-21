
const drawerWidth = 240
export default (isMobile) => ({
  toolbar: [
    {
      color: 'white',
      height: '80px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    isMobile && {
      ml: 0,
      flexWrap: 'wrap',
      backgroundColor: 'red'
    }
  ],

  menuButton: [
    { mr: 2 },
    !isMobile && {
      display: 'none'
    }
  ],
  drawer: [
    isMobile && {
      width: drawerWidth,
      flexShrink: 0

    }
  ],
  drawerPaper: {
    width: drawerWidth
  },
  linkButton: {
    '&:hover': {
      color: 'white !important',
      TextDecoration: 'none'
    }
  }

})
