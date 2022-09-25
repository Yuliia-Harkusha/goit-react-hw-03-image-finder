import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9a8a8a;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
`;

export const ModalWindow = styled.div`
  max-width: 50%;
  border-radius: 10px;
  position: relative;
  padding: 15px;
  background-color: #fff;
`;

export const CloseButton = styled.span`
  color: #2222c4;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;
