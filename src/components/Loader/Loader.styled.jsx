import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderIcon = styled.span`
  margin-top: 30px;
  transform: rotate(360deg);
  transition: transform 250ms linear infinite;
  color: #3a3af8;
`;
