import React from 'react';
import Button from '../Button';
import Perfil from "../../imgs/1.png"

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo> 
        SIEGE
        </Logo>

        <MenuButton className="active">
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton >
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
      </Topside>

      <Button>
        <span>Evento</span>
      </Button>

      <Botside>
      <Avatar>
          <img src={Perfil} />
        </Avatar>  
        <ProfileData>
          <strong>Administrador</strong>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
