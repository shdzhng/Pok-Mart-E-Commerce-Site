import React, { useRef, useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField, Box } from '@mui/material';
import { colors } from '../../constants/colors';
import { ThemeProvider } from '@mui/material';
import { modalTheme } from './styles';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  display: 'flex',
  bgcolor: colors.red,
  border: `2px solid ${colors.pink}`,
  boxShadow: 24,
  flexDirection: 'column',
  p: 4,
};

function LogInModal({ open, handleClose, setLoggedIn }) {
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
    setLoggedIn(true);
    handleClose();
  };

  return (
    <ThemeProvider theme={modalTheme}>
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
          <Box sx={boxStyle}>
            {mode === 'register' ? (
              <TextField
                sx={{ mt: 2 }}
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
                sx={{ mt: 1 }}
                className="login-textfield"
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
              sx={{ mt: 1 }}
              label="Email Address"
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
                sx={{ mt: 1 }}
                required
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
                sx={{ mt: 1 }}
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
                sx={{ mt: 1 }}
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
                variant="contained"
                onClick={() => {
                  handleReset();
                }}
              >
                Send Reset Link
              </Button>
            ) : (
              <Button
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
                variant="contained"
                onClick={() => {
                  setMode('signin');
                }}
              >
                Back
              </Button>
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}

export default LogInModal;
