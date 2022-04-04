import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

function Part1() {
  return (
      <>
        <Box sx={{zIndex:"-100", position:"absolute", left:"-10%", overflow:"hidden"}}>
            <img src="assets/worm.png" width="110%" alt="" />
        </Box>
        <Box sx={{height:"70vh", display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
            <p className="display-1 fw-bold" >
            Easy is a pussio
            </p>
            <p>
            With one token get exposure to a diversified portfolio of projects across multiple chains.
            </p>
            <Box py={5}>
                <Button size="large" style={{color:"black",margin:"0 20px 5px 0", background: 'linear-gradient(to right, #02aab0, #00cdac)', fontFamily:"poppins", fontWeight:"bold", letterSpacing:"2px"}} variant="contained">Enter App</Button>
                <Button size="large" style={{margin:"0 0px 5px 0", fontWeight:"bold", fontFamily:"poppins", letterSpacing:"1px", color:"black", background:"linear-gradient(to right, #da4453, #89216b)"}} variant="contained" >Documentation</Button>
            </Box>
        </Box>
      </>
    
  )
}

export default Part1