import React from 'react';
import Perfil from "../../imgs/1.png"
import ImgPost from "../../imgs/post.png"

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {db} from "../../firebase";

const getAllPosts = async (indice: number) => {
   const poststCol = collection(db, 'posts');
   const postSnapshot = await getDocs(poststCol);
   const postList = postSnapshot.docs.map(doc => doc.data());
   //console.log(postList[indice].text); DEBUG DA API
   return postList[indice];
}

getAllPosts(0).then((value) => {
   console.log(value);
})

//console.log(getAllPosts(numbers[0]));

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
          </Description>

          <ImageContent>
          < img src={ImgPost} />
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
