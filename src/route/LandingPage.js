import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Part1 from "../component/landingpage/Part1"
import Part2 from "../component/landingpage/Part2"
import Part3 from "../component/landingpage/Part3"
import Part4 from "../component/landingpage/Part4"
import ParticlesBack from "../component/particles/ParticlesBack"

function LandingPage() {
  

  return (
    <Container>
      <ParticlesBack/>
      <Box>
        <Part1/>
        <Part2/>
        <Part3/>
      </Box>
    </Container>
  )
}

export default LandingPage