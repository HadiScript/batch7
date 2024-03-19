import Layout from "../components/dashboard/Layout"
import { LineGraph } from "../components/dashboard/LineChart"
import Heading from "../components/landingpage/Heading"

const Stats = () => {
  return (
    <Layout bgColor={'bg-warning'}>

      {/* <Heading /> */}

      <div className="row">
        <div className="col">
          <LineGraph />
        </div>
      </div>


    </Layout>
  )
}

export default Stats