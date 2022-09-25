import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  background-color: #2424c4;
`;

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  color: #2424c4;
  background-color: #fbf2f2;
  cursor: pointer;
  :hover,
  :focus {
    color: #3a3af8;
  }
`;

export const Input = styled.input`
  display: inline-flex;
  width: 400px;
  height: 30px;
  padding: 0 10px;
  border: none;
  outline: none;
`;
