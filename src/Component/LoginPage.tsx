

// import React, { useState } from 'react';
// import { Form, Input, Button, Checkbox, Typography } from 'antd';
// import './style.css';

// const { Title, Text } = Typography;

// const Login: React.FC = () => {
//   const [keepSignedIn, setKeepSignedIn] = useState<boolean>(false);

//   const handleSubmit = (values: any) => {
//     console.log('Form values:', values);
//     // Handle form submission logic here
//   };

//   return (
//     <div className="container">
//       <Form
//         layout="vertical"
//         onFinish={handleSubmit}
//         className="login-form"
//       >
       

//         <Title level={2}>Login</Title>
//         <Text>
//         <div className='name'>
//           Don't have an account? <a href="/signup" className="link">Sign up</a> </div>
//         </Text>

//         <Form.Item
//           label="Email Address"
//           name="email"
//           rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
//         >
//           <Input placeholder="Enter email address" />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: 'Please enter your password' }]}
//         >
//           <Input.Password placeholder="Enter password" />
//         </Form.Item>

//         <div className="form-options">
//           <Form.Item name="keepSignedIn" valuePropName="checked" noStyle>
//             <Checkbox checked={keepSignedIn} onChange={() => setKeepSignedIn(!keepSignedIn)}>
//               Keep me signed in
//             </Checkbox>
//           </Form.Item>
//           <a href="#" className="forgot-password">Forgot Password?</a>
//         </div>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="btn">
//             Login
//           </Button>
//         </Form.Item>
//       </Form>

//       <div className="login-with">
//         <p>Login with</p>
//         <div className="social-login">
//           <Button className="google-btn">
//             <a href="https://www.google.co.in/">Google</a>
//           </Button>
//           <Button className="twitter-btn">
//             <a href="https://www.twitter.com/login">Twitter</a>
//           </Button>
//           <Button className="facebook-btn">
//             <a href="https://www.facebook.com/login">Facebook</a>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store'; // Adjust path as needed
import '../styles/style.css';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    
    // Retrieve user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData') || '{}');

    // Validate login
    const isValid = (
      values.email === storedData.email &&
      values.password === storedData.password
    );

    if (isValid) {
      console.log('Login successful!');
      // Handle successful login
      navigate('/dashboard'); // Redirect to a different page
    } else {
      console.log('Invalid credentials');
      // Handle invalid login
    }
  };

  return (
    <div className="container">
      <Form
        layout="vertical"
        onFinish={handleFinish}
        className="login-form"
      >
        <Title level={2}>Login</Title>
        <Text>
          Don't have an account? <a href="/signup" className="link">Sign up</a>
        </Text>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item name="keepSignedIn" valuePropName="checked" noStyle>
          <Checkbox>
            Keep me signed in
          </Checkbox>
        </Form.Item>
        <a href="#" className="forgot-password">Forgot Password?</a>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn">
            Login
          </Button>
        </Form.Item>

        <div className="login-with">
          <p>Login with</p>
          <div className="social-login">
            <Button className="google-btn">
              <a href="https://www.google.co.in/">Google</a>
            </Button>
            <Button className="twitter-btn">
              <a href="https://www.twitter.com/login">Twitter</a>
            </Button>
            <Button className="facebook-btn">
              <a href="https://www.facebook.com/login">Facebook</a>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
