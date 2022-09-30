import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Animation = keyframes`
  0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg);}
`;

export const LoaderIcon = styled.span`
  margin-top: 50px;
  transform: rotate(360deg);
  transition: transform 250ms linear infinite;
  color: #1f53ff;
  animation-name: ${Animation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;
