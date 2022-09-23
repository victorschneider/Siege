import styled, { css } from 'styled-components';
import { Photo } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div` 
  display: flex;
  border-bottom: 1px solid var(--outline);
  padding: 3px;
  justify-content: space-between;
 
`;

export const Body = styled.div`
  width: 100%;
`;

export const Content = styled.div`


`;

export const Texto = styled.div`
  
  > textarea {
      letter-spacing: 0.040em;
      padding: 10px;
      font-size: 16px;
  }
  
`;

export const Bottom = styled.div`
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  color: var(--color1);
    > div {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Icon = styled.div`

`;

const iconCSS = css`
  
`;

export const AddPhotoAlternate = styled(Photo)`
  ${iconCSS}
`;

export const ButtonPost = styled(Button)`
  padding: 6px 17px;
`;