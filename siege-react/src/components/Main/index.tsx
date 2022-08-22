import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  ProfileIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <ProfileIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
