import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

const Loader = () => {
  return (
        <Box display='flex' justifyContent='center'>
        <CircularProgress size='4rem' />
    </Box>
  )
}

export default Loader
