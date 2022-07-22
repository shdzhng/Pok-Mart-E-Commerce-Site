import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';

const float = keyframes`
  0% {
    right: 2%;
    top:20%
  }
  100% {
   right: 4%;
   top: 22%;
  }
`;

const grounded = keyframes`
 0% {
  transform:skew(12deg, 20deg),
  }
  100% {
 transform: skew(200deg, 0deg),
  }
`;

const fade = keyframes`
0% {
		opacity: 0;
	}
  25%{
    opacity:1;
  }
  75%{
    opacity:1;
  }
	100% {
		opacity: 0;
	}
`;

const bounce = keyframes`
0% {
		-webkit-transform: translateY(0%) ;
	}
	100%{
		-webkit-transform: translateY(-20%);
	}
`;

const Butterfree = styled(Box)({
  zIndex: -1,
  overflowX: 'hidden',
  position: 'absolute',
  width: 'auto',
  height: 'auto',
  animation: `${float} 1s infinite ease-in-out`,
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
});

const Gengar = styled(Box)({
  zIndex: -1,
  overflowX: 'hidden',
  position: 'absolute',
  width: 'auto',
  height: 'auto',
  animation: `${fade} 10s infinite ease-in-out`,
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
  right: '2%',
  bottom: '0.5%',
});

const Weedle = styled(Box)({
  zIndex: -2,
  overflowX: 'hidden',
  position: 'absolute',
  width: 'auto',
  height: 'auto',
  left: '4%',
  bottom: '0.5%',
  transform: 'scaleX(-1)',
  animation: `${grounded} 1s infinite ease-in-out`,
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
});

const Venonat = styled(Box)({
  zIndex: -1,
  overflowX: 'hidden',
  position: 'absolute',
  width: 'auto',
  height: 'auto',
  right: '5.5%',
  bottom: '0.5%',
});

const Pikachu = styled(Box)({
  zIndex: -1,
  overflowX: 'hidden',
  position: 'absolute',
  width: 'auto',
  transform: 'scaleX(-1)',
  height: 'auto',
  left: '1.2%',
  bottom: '0.3%',
});

export { Butterfree, Weedle, Gengar, Venonat, Pikachu };
