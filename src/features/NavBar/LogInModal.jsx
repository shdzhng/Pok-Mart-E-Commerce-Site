import React, { useRef, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { FormControl } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { colors } from '../../constants/colors';
import { formSxStyle, buttonSxStyle } from './styles';

function LogInModal({ open, handleClose }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    passsword: '',
    passswordConfirmation: '',
  });
  const [mode, setMode] = useState('signin');

  const handleRegister = () => {
    console.log('Register');
    console.log(userInfo);
    handleClose();
  };

  const handleReset = () => {
    console.log('Reset');
    console.log(userInfo);
    handleClose();
  };

  const handleLogIn = () => {
    console.log('LogIn');
    console.log(userInfo);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <FormControl sx={formSxStyle}>
          {mode === 'register' ? (
            <TextField
              required
              value={userInfo.firstName}
              onChange={({ target }) => {
                setUserInfo((prevState) => ({
                  ...prevState,
                  firstName: target.value,
                }));
              }}
              label="First Name"
              type="string"
              variant="standard"
            />
          ) : null}

          {mode === 'register' ? (
            <TextField
              required
              sx={{ mt: 2 }}
              value={userInfo.lastName}
              onChange={({ target }) => {
                setUserInfo((prevState) => ({
                  ...prevState,
                  lastName: target.value,
                }));
              }}
              label="Last Name"
              type="string"
              variant="standard"
            />
          ) : null}

          <TextField
            label="Email Address"
            sx={{ mt: 2 }}
            required
            variant="standard"
            onChange={({ target }) => {
              setUserInfo((prevState) => ({
                ...prevState,
                email: target.value,
              }));
            }}
            type="email"
            value={userInfo.email}
          />

          {mode === 'reset' ? null : (
            <TextField
              required
              sx={{ mt: 2 }}
              value={userInfo.passsword}
              onChange={({ target }) => {
                setUserInfo((prevState) => ({
                  ...prevState,
                  passsword: target.value,
                }));
              }}
              label="Password"
              variant="standard"
              type="password"
            />
          )}

          {mode === 'register' ? (
            <TextField
              required
              sx={{ mt: 2 }}
              value={userInfo.passswordConfirmation}
              onChange={({ target }) => {
                setUserInfo((prevState) => ({
                  ...prevState,
                  passswordConfirmation: target.value,
                }));
              }}
              label="Password Confirmation"
              type="password"
              variant="standard"
            />
          ) : null}

          {mode === 'signin' ? (
            <Button
              className="inputButton"
              variant="contained"
              onClick={() => {
                handleLogIn();
              }}
            >
              LogIn
            </Button>
          ) : null}

          {mode !== 'reset' ? (
            <Button
              className="inputButton"
              variant="contained"
              onClick={() => {
                if (mode === 'register') {
                  handleRegister();
                  return;
                }
                setMode('register');
              }}
            >
              Create Account
            </Button>
          ) : null}

          {mode === 'reset' ? (
            <Button
              className="inputButton"
              variant="contained"
              onClick={() => {
                if (mode === 'reset') {
                  handleReset();
                  return;
                }
                setMode('reset');
              }}
            >
              Send Reset Link
            </Button>
          ) : (
            <Button
              className="inputButton"
              variant="contained"
              onClick={() => {
                if (mode === 'reset') {
                  return;
                }
                setMode('reset');
              }}
            >
              Forgot Password
            </Button>
          )}

          {mode !== 'signin' ? (
            <Button
              className="inputButton"
              variant="contained"
              onClick={() => {
                setMode('signin');
              }}
            >
              Back
            </Button>
          ) : null}
        </FormControl>
      </Fade>
    </Modal>
  );
}

export default LogInModal;
