import { Button, Col, Input, Row, Select, Tag, Typography } from "antd";
import { usePoints } from "../../../../utils/custom-hooks";


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const BlogForm = ({ values, setValues, submit, loading, list, categoriesLoading, error, from = "create" }) => {
  const points = usePoints();
  return (
    <Row>
      <Col md={16} xs={24} className={points.md && 'p-2'}>
        <div className="p-2">

          <div className="py-2">
            <Typography.Title level={5}>Blog Title</Typography.Title>
            <Input
              name="title"
              value={values.title}
              placeholder="Give your post a title"
              onChange={e => setValues({ ...values, title: e.target.value })}
            />
          </div>

          <div className="py-2">
            <Typography.Title level={5}>Content</Typography.Title>
            <ReactQuill theme="snow" value={values.content} onChange={v => setValues({ ...values, content: v })} />
          </div>
        </div>
      </Col>
      <Col md={8} xs={24} className={points.md && 'p-2'}>
        {/* {
          from === 'edit' && <div className="d-flex flex-nowrap gap-3 mb-2">
            {values?.categories?.map((x,index) => <Tag key={index}>{x}</Tag>)}
          </div>
        } */}


        <div className="border rounded-3 p-2">
          <Select
            mode="multiple"
            loading={categoriesLoading}
            allowClear={true}
            placeholder="Select categories"
            style={{ width: "100%" }}
            onChange={(v) => setValues({ ...values, categories: v })}
          >

            {list.map((item) => (
              <Select.Option key={item.name}>{item.name}</Select.Option>
            ))}
          </Select>
        </div>


        <Button
          loading={loading}
          style={{ margin: "10px 0px 10px 0px", width: "100%" }}
          type="primary"
          onClick={submit}
        >
          Publish
        </Button>

        {error && <p className="text-danger">{error}</p>}
      </Col>
    </Row>
  )
}

export default BlogForm