import styled, { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
