import { Button } from "react-bootstrap"
import { MdOutlineDashboard } from "react-icons/md"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="landing-page d-flex flex-column justify-content-center align-items-center px-2">
      <h1>With Hadi E-learning</h1>
      <i>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</i>
      <Link className="_link" to={'/stats'}>
        <Button className="myBtn mt-3 d-flex gap-2 align-items-center"> <MdOutlineDashboard /> Dashboard </Button></Link>
    </div>
  )
}

export default Hero