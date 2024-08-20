// import React from 'react';
// import { Form, Input, Button, Typography, Checkbox } from 'antd';
// import './signup.css';
 
// const { Title, Link } = Typography;
 
// const Signup: React.FC = () => {
//   return (
//     <div className="container">
//       <div className="form-wrapper">
//         <div className="header">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TWSsFuiC8ZS7a7DcEpXU3te8mtlMrxux5ys6DtwsxW4NDXas"
//             alt="Mantis Logo"
//             className="logo"
//           />
//           <div className="header-text">
//             <span className="logo-text">Mantis</span>
//             <span className="version">v1.3.0</span>
//           </div>
//         </div>
 
//         <div className="signup-form">
//           <Title level={2}>Sign up</Title>
//           <div className="login-link">
//             <Link href="/login" className="link">
//               Already have an account?
//             </Link>
//           </div>
 
//           <Form layout="vertical">
//             <Form.Item
//               label="First Name"
//               name="firstName"
//               rules={[{ required: true, message: 'Please enter your first name!' }]}
//             >
//               <Input placeholder="John" />
//             </Form.Item>
 
//             <Form.Item
//               label="Last Name"
//               name="lastName"
//               rules={[{ required: true, message: 'Please enter your last name!' }]}
//             >
//               <Input placeholder="Doe" />
//             </Form.Item>
 
//             <Form.Item label="Company" name="company">
//               <Input placeholder="Demo Inc." />
//             </Form.Item>
 
//             <Form.Item
//               label="Email Address"
//               name="email"
//               rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
//             >
//               <Input placeholder="demo@company.com" />
//             </Form.Item>
 
//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[{ required: true, message: 'Please enter your password!' }]}
//             >
//               <Input.Password placeholder="******" />
//             </Form.Item>
 
//             <div className="terms">
//               <Checkbox>
//                 By signing up, you agree to our{' '}
//                 <Link href="#">Terms of Service</Link> and{' '}
//                 <Link href="#">Privacy Policy</Link>
//               </Checkbox>
//             </div>
 
//             <Form.Item>
//               <Button type="primary" htmlType="submit" className="btn">
//                 Create Account
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Signup;

import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setSignupData } from '../redux/signupSlice'; // Adjust path as needed
import '../styles/signup.css'; // Adjust path as needed

const { Title, Text } = Typography;

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    dispatch(setSignupData(values));
    // Save to localStorage
    localStorage.setItem('userData', JSON.stringify(values));
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="container">
      <Form
        layout="vertical"
        onFinish={handleFinish}
        className="signup-form"
      >
        <Title level={2}>Sign up</Title>
        <Text>
          Already have an account? <a href="/login" className="link">Log in</a>
        </Text>

        <Form.Item
          label="First Name*"
          name="firstName"
          rules={[{ required: true, message: 'Please enter your first name' }]}
        >
          <Input placeholder="John" />
        </Form.Item>

        <Form.Item
          label="Last Name*"
          name="lastName"
          rules={[{ required: true, message: 'Please enter your last name' }]}
        >
          <Input placeholder="Doe" />
        </Form.Item>

        <Form.Item
          label="Company"
          name="company"
        >
          <Input placeholder="Demo Inc." />
        </Form.Item>

        <Form.Item
          label="Email Address*"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
        >
          <Input placeholder="demo@company.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="******" />
        </Form.Item>

        <Text className="password-strength poor">Poor</Text>

        <Form.Item name="agreement" valuePropName="checked" className="terms">
          <Checkbox>
            By Signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn">
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
