import {Box, Stack, CircularProgress} from "@mui/material"

import React from 'react'

const Loader = () => {
  return (
    <Box>
        <Stack direction="row" justifyContent="center" alignItems="center" height="80vh">
      
          <CircularProgress></CircularProgress>

        </Stack>
    </Box>
  )
}

export default Loader