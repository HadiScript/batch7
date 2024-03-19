import { FloatButton } from "antd"
import { MdHome } from "react-icons/md"


const FloatBtn = () => {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 50 }}
        icon={<MdHome />}
      >
        <FloatButton />
        <FloatButton icon={<MdHome />} />
      </FloatButton.Group>

    </>
  )
}

export default FloatBtn