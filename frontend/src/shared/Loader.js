import { CircularProgress } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"

const style = {
  Spinner : {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)"
  }
}

// loading animation
const Loader = () => {

  return (
    <Box style={style.Spinner}>
      <CircularProgress
      color="primary"
      size={60}
      />
    </Box>
  )

}

export default Loader
