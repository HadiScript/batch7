import { MdLogout, MdMenu } from "react-icons/md"

const Header = ({ setShowSidebar }) => {
  return (
    <div className="d-flex justify-content-between align-items-center pb-2 pt-3 border-bottom mb-3">
      <div ><MdMenu className="d-block d-md-none" onClick={() => setShowSidebar(true)} /></div>
      <div className="d-flex justify-content-center align-items-center gap-2"> Logout <MdLogout /> </div>
    </div>
  )
}

export default Header