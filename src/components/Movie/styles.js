const linksStyle = {

  alignItems: 'center',
  fontWeight: 'bold'

}

export default (theme, isXL) => {
  const styles = {
    movie: {
      padding: '10px'
    },
    links: {
      ...linksStyle,
      textDecoration: 'none'

    },
    image: {
      borderRadius: '20px',
      height: '300px',
      marginBotton: '10px'

    },
    title: {
      color: theme.palette.text.primary,
      textOverflow: 'ellipsis',
      width: '230px',
      overflow: 'hidden',
      mt: '10px',
      mb: '0',
      textAlign: 'center'
    }
  }
  if (isXL) {
    styles.links.display = 'flex'
    styles.links.flexDirection = 'column'
  }
  return styles
}

// ?    textOverflow: 'ellipsis'
// this property make //* blablabla... if the text is too long

