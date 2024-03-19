import { Button, Checkbox, Form, Input } from 'antd';
import { AiFillGoogleCircle, AiOutlineLogin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { paths } from '../../utils/paths';

import { useAuthentication } from '../../actions/_auth';
import { useEffect } from 'react';


const Login = () => {

  const { loading, onFinish } = useAuthentication();


  useEffect(()=>{
    
  },[])




  return (
    <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center ">
      <div style={{ width: "400px" }} className="border rounded-3 m-2 px-4 py-4 shadow">

        <h3 className='m'>Login</h3>
        <p className='n'>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
        </p>
        <Form
          layout='vertical'
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"

            rules={[
              {
                required: true,
                message: 'Password is required!',
              },
            ]}
          >
            <Input type='password' />
          </Form.Item>


          <Form.Item className=''>
            <Button loading={loading} icon={<AiOutlineLogin />} className='btnP mt-2' htmlType="submit">
              Login
            </Button>

            <Button icon={<AiFillGoogleCircle />} className='bg-danger text-white mt-4' >
              Login with google
            </Button>

            <p className='mt-3'>
              Do you have an account? <Link to={paths.register}>Register!</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login

