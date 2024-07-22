import React, { useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../calls/users";

function Register() {
  const onFinish = async (values) => {
    console.log("values", values);
    try {
      // Adjusting the form values to match the userModel schema
      const adjustedValues = {
        userName: values.userName,
        userEmail: values.userEmail,
        userPassword: values.userPassword,
        institutionName: values.institutionName,
        codingHandles: {
          leetCode: values.leetCode,
          codeChef: values.codeChef,
          codeForces: values.codeForces,
        },
      };
      console.log("adjustedValues", adjustedValues);
      const response = await RegisterUser(adjustedValues);
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to CodeHub</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Name"
                htmlFor="userName"
                name="userName"
                className="d-block"
                rules={[{ required: true, message: "Name is required!" }]}
              >
                <Input id="name" type="text" placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                htmlFor="userEmail"
                name="userEmail"
                className="d-block"
                rules={[{ required: true, message: "Email is required!" }]}
              >
                <Input id="email" type="email" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Password"
                htmlFor="userPassword"
                name="userPassword"
                className="d-block"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input id="password" type="password" placeholder="Enter the password" />
              </Form.Item>
              <Form.Item
                label="Institution Name"
                htmlFor="institutionName"
                name="institutionName"
                className="d-block"
              >
                <Input id="institution" type="text" placeholder="Enter your institution name (optional)" />
              </Form.Item>
              <Form.Item
                label="LeetCode Handle"
                htmlFor="leetCode"
                name="leetCode"
                className="d-block"
              >
                <Input id="leetCode" type="text" placeholder="Enter your LeetCode handle (optional)" />
              </Form.Item>
              <Form.Item
                label="CodeChef Handle"
                htmlFor="codeChef"
                name="codeChef"
                className="d-block"
              >
                <Input id="codeChef" type="text" placeholder="Enter your CodeChef handle (optional)" />
              </Form.Item>
              <Form.Item
                label="CodeForces Handle"
                htmlFor="codeForces"
                name="codeForces"
                className="d-block"
              >
                <Input id="codeForces" type="text" placeholder="Enter your CodeForces handle (optional)" />
              </Form.Item>
              <Form.Item>
                <Button block type="primary" htmlType="submit" style={{ fontSize: "1rem", fontWeight: "600" }}>
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                Already a user? <Link to="/login">Login now</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;