import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../../apis/auth';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cnfrmpwd, setCnfrmpwd] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [msg, setMsg] = useState('')


  const HandleClick = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setMsg('')

    if (name.length < 2) {
      setErrorMessage('Name must contain at least 2 characters');
      return;
    }

    if (!/^[a-zA-Z\s-]+$/.test(name)) {
      setErrorMessage('Name must contain only letters, spaces, and hyphens');
      return;
    }

    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('Invalid phone number');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setErrorMessage('Password must contain at least one lowercase letter');
      return;
    }

    if (!/\d/.test(password)) {
      setErrorMessage('Password must contain at least one number');
      return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      setErrorMessage('Password must contain at least one special character');
      return;
    }

    if (password !== cnfrmpwd) {
      setErrorMessage('Confirm Password must match the password field');
      return;
    }

    if (!name || !email || !phone || !password || !cnfrmpwd) {
      setMsg('')
      setErrorMessage('Please Fill All Fields');
    } else {
      const data = {
        name: name,
        email: email,
        phone: phone,
        password: password
      }

      createUser(data).then((res) => {
        console.log(res);
        if (res.status === 201) {
          setMsg('Sign Up Successfully!');
          setInterval(() => {
            setName('')
            setEmail('')
            setPhone('')
            setPassword('')
            setCnfrmpwd('')
            setMsg('');
          }, 2000);
        } else {
          setErrorMessage(res.data.payload.email[0])
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center my-5 py-5">
          <div className="col-md-4">
            <div className="login-form">
              {/* Heading */}
              <div className="h3 fw-bold">Sign Up</div>
              <div className="line mt-3"></div>
              <div className="text-secondary small m-1 mb-2">
                Insert your account information:
              </div>

              {/* Form */}
              <div>
                {errorMessage && (
                  <div className="text-danger border btn w-100 text-start rounded-0 px-3 py-2 mt-2" role="alert">
                    <span className='small'> {errorMessage}</span>
                  </div>
                )}

                {msg && (
                  <div className="text-success border btn w-100 text-start rounded-0 px-3 py-2 mt-2" role="alert">
                    <span className='small'> {msg}</span>
                  </div>
                )}

                <input type="text" className="input-field mt-4"
                  placeholder="Username"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  className="input-field my-2"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="number"
                  className="input-field mb-2"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  className="input-field mt-2"
                  placeholder="Confirm Password"
                  onChange={(e) => setCnfrmpwd(e.target.value)}
                />

                <button
                  type="submit"
                  className="btn btn-dark rounded-0 mt-3 mb-2"
                  onClick={HandleClick}
                >
                  Sign Up
                </button>
              </div>
              <div className='mt-2'>

                <Link to="/login" className="register-link text-decoration-none">
                  Already Have an account? <span className='fw-normal text-decoration-underline my-3'> Login here</span>.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};