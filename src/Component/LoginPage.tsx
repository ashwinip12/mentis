
// import React, { useState } from 'react';
// import './style.css';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [keepSignedIn, setKeepSignedIn] = useState<boolean>(false);

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="container">
//       <div className="form-wrapper">
//         <div className="header">
//           <img src="signup.png" alt="Mantis Logo" className="logo" />
//           <div className="header-text">
//             <span className="logo-text">Mantis</span>
//             <span className="version">v1.3.0</span>
//           </div>
//         </div>
//         <div className="form login-form">
//           <h2>Login</h2>
//           <a href="/signup" className="link">Don't have an account?</a>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter email address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-options">
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={keepSignedIn}
//                   onChange={() => setKeepSignedIn(!keepSignedIn)}
//                 /> 
//                 Keep me signed in
//               </label>
//               <a href="#" className="forgot-password">Forgot Password?</a>
//             </div>
//             <button type="submit" className="btn">Login</button>
//           </form>
//           <div className="login-with">
//             <p>Login with</p>
//             <div className="social-login">
//               <button className="google-btn">
//                 <a href="https://www.google.co.in/">Google</a>
//               </button>
//               <button className="twitter-btn">
//                 <a href="https://www.twitter.com/login">Twitter</a>
//               </button>
//               <button className="facebook-btn">
//                 <a href="https://www.facebook.com/login">Facebook</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import './style.css';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [keepSignedIn, setKeepSignedIn] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        className="login-form"
      >
       

        <Title level={2}>Login</Title>
        <Text>
        <div className='name'>
          Don't have an account? <a href="/signup" className="link">Sign up</a> </div>
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

        <div className="form-options">
          <Form.Item name="keepSignedIn" valuePropName="checked" noStyle>
            <Checkbox checked={keepSignedIn} onChange={() => setKeepSignedIn(!keepSignedIn)}>
              Keep me signed in
            </Checkbox>
          </Form.Item>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn">
            Login
          </Button>
        </Form.Item>
      </Form>

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
    </div>
  );
};

export default Login;
