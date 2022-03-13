import { CircularProgress, Stack } from "@mui/material"
import React from "react"


const Loader = () => {

  return (

    <Stack alignItems="center" 
    spacing={5}
    position="fixed" 
    top="40%" 
    left="40%" 
    justifyContent={"center"}
    size="30"
    >

      <CircularProgress
      color="secondary"
      size={100}
      />

    </Stack>

  )

}


export default Loader
