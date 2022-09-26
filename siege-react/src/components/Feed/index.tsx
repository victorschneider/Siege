import React from 'react';
import Post from '../Post';

import { Container, Posts } from './styles';

const Feed: React.FC = () => {
   let i = 0;
  return (
    <Container>
      <Posts>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Posts>
    </Container>
  );
};

export default Feed;
