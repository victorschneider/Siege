import React from 'react';
import Perfil from "../../imgs/1.png"
import ImgPost from "../../imgs/post.png"

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  LikeIcon,
} from './styles';

const Post: React.FC = () => {
  return (
    <Container>
      <Body>
        <Avatar>
          <img src={Perfil} />
        </Avatar>  
        <Content>
          <Header>
            <strong>Administrador</strong>
            <Dot/>
            <time>14 de ago</time>
          </Header>

          <Description> 
            Veja, um novo evento! Esse é um evento de teste!! 
            Compareça ao evento de teste no dia 00/00/2022 às 15h.
          </Description>

          <ImageContent>
          <img src={ImgPost} />
          </ImageContent>


          <Icons>
  
            <Status>
              <LikeIcon />
            </Status>
            <div>
              #GRÊMIO
            </div>

          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Post;
