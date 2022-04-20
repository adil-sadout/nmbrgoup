
import Part1 from "../component/landingpage/Part1"
import Part2 from "../component/landingpage/Part2"
import Part3 from "../component/landingpage/Part3"
import Part4 from "../component/landingpage/Part4"
import Part5 from "../component/landingpage/Part5"
import ParticlesBack from "../component/particles/ParticlesBack"


function LandingPage() {
  
  

  return (
    <div className="container">
      <ParticlesBack/>
      <div>
        <Part1/>
        <Part2/>
        <Part4/>
        <Part3/>
        <Part5/>
      </div>
    </div>
  )
}

export default LandingPage