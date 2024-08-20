import React from 'react';
import { Form, Input, Button, Typography, Checkbox } from 'antd';
import './signup.css';
 
const { Title, Link } = Typography;
 
const Signup: React.FC = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="header">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4TWSsFuiC8ZS7a7DcEpXU3te8mtlMrxux5ys6DtwsxW4NDXas"
            alt="Mantis Logo"
            className="logo"
          />
          <div className="header-text">
            <span className="logo-text">Mantis</span>
            <span className="version">v1.3.0</span>
          </div>
        </div>
 
        <div className="signup-form">
          <Title level={2}>Sign up</Title>
          <div className="login-link">
            <Link href="/login" className="link">
              Already have an account?
            </Link>
          </div>
 
          <Form layout="vertical">
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name!' }]}
            >
              <Input placeholder="John" />
            </Form.Item>
 
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name!' }]}
            >
              <Input placeholder="Doe" />
            </Form.Item>
 
            <Form.Item label="Company" name="company">
              <Input placeholder="Demo Inc." />
            </Form.Item>
 
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
            >
              <Input placeholder="demo@company.com" />
            </Form.Item>
 
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="******" />
            </Form.Item>
 
            <div className="terms">
              <Checkbox>
                By signing up, you agree to our{' '}
                <Link href="#">Terms of Service</Link> and{' '}
                <Link href="#">Privacy Policy</Link>
              </Checkbox>
            </div>
 
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btn">
                Create Account
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
 
export default Signup;