import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Procurar por um evento" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
