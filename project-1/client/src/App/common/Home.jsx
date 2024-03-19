
import { Button } from "antd"
import { RedirectTo } from "../../utils/redirectTo"

const Home = () => {





  return (
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column  gap-3 justify-content-center align-items-center ">
      <Button style={{ width: "300px" }}>
        All Blogs -
      </Button>
      <RedirectTo />
    </div>
  )
}

export default Home