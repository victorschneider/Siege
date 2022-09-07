import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

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
          <List
            title="Em alta"
            elements={[
              <FollowSuggestion name="Grêmio"/>,
              <FollowSuggestion name="Trincabotz"/>,
              <FollowSuggestion name="Fractal"/>,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
