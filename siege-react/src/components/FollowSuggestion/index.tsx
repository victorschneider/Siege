import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
}

const FollowSuggestion: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
