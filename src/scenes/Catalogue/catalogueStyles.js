import styled from 'styled-components';
import { TextField, Button, Box } from '@mui/material';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const StyledContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  overflowY: 'scroll',
  position: 'fixed',
  top: 70,
  alignItems: 'strech',
  maxHeight: '90vh',
});

export { StyledContainer };
