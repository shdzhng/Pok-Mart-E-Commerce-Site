import React, { useRef, useState, useEffect, useCallback } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {
  Button,
  TextField,
  Box,
  Icon,
  Typography,
  FormControl,
} from '@mui/material';
import { colors } from '../../constants/colors';
import { ThemeProvider } from '@mui/material';
import { modalTheme } from './styles';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { boxStyle, logoBoxStyle } from './styles';
import pokeballLogo from '../../constants/pokeball-blue.svg';

function LogInModal({ open, handleClose, setUser, user }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirmation: '',
  });
  const [mode, setMode] = useState('signin');
  const [error, setError] = useState({
    type: null,
    mesasge: null,
  });

  useEffect(() => {
    if (user) {
      handleClose();
    }
  }, [user]);

  const handleRegister = useCallback(() => {
    const { email, password, passwordConfirmation, firstName, lastName } =
      userInfo;
    setError({
      type: null,
      mesasge: null,
    });
    if (password.length < 6) {
      setError({
        type: 'password',
        message: 'Password should be at least 6 characters.',
      });
      return;
    }

    if (password !== passwordConfirmation) {
      setError({ type: 'password', message: 'Passwords do not match' });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((err) => {
        if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
          setError({ type: 'email', message: 'email already in use' });
          return;
        }
      });
  }, [user]);

  const handleReset = () => {
    console.log('Reset');
    console.log(userInfo);
    handleClose();
  };

  const handleLogIn = useCallback(() => {
    const { email, password } = userInfo;
    setError({
      type: null,
      mesasge: null,
    });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
          setError({ type: 'email', message: 'user not found' });
          return;
        }
        if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
          setError({ type: 'password', message: 'wrong password' });
        }
        if (errorMessage.includes('too-many-request')) {
          console.log('oh no');
        }
        return;
      });
  }, [userInfo]);

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
            {/* <Box sx={logoBoxStyle}>
              <Icon
                sx={{
                  display: 'inline-block',
                  mr: 1,
                  overflow: 'visible',
                  width: { xs: 20, sm: 30 },
                }}
              >
                <img
                  width={'inherit'}
                  src={pokeballLogo}
                  style={{ verticalAlign: 'top' }}
                />
              </Icon>

              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: 'flex',
                  fontSize: { xs: '1em', sm: '2em' },
                  fontWeight: 700,
                  color: colors.blue4,
                  textDecoration: 'none',
                }}
              >
                PokéMart
              </Typography>
            </Box> */}

            <FormControl>
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
                error={error.type === 'email' ? true : false}
                helperText={error.type === 'email' ? error.message : null}
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
                  value={userInfo.password}
                  error={error.type === 'password' ? true : false}
                  helperText={error.type === 'password' ? error.message : null}
                  onChange={({ target }) => {
                    setUserInfo((prevState) => ({
                      ...prevState,
                      password: target.value,
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
                  value={userInfo.passwordConfirmation}
                  error={error.type === 'password' ? true : false}
                  onChange={({ target }) => {
                    setUserInfo((prevState) => ({
                      ...prevState,
                      passwordConfirmation: target.value,
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
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
}

export default LogInModal;
