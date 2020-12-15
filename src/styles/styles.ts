import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.secondary};
  font-size: 64px;
  margin-bottom: 32px;
`;

export const Subtitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 32px;
  margin-bottom: 32px;
`;