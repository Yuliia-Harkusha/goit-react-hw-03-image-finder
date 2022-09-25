import React from 'react';
import { FaCog } from 'react-icons/fa';
import { Wrapper, LoaderIcon } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderIcon>
        <FaCog size={60} />
      </LoaderIcon>
    </Wrapper>
  );
};
