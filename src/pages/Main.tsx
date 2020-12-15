import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Container, Subtitle, Title } from '../styles/styles';

export interface MainProps {
  toggleTheme: () => void;
}

const Main: React.FC<MainProps> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)
  
  return (
    <Container>
        <Title>{"<"}Never Stop Learning{"/>"}</Title>
        <Subtitle>DoWhile 2020!</Subtitle>
        <Switch 
          onChange={toggleTheme}
          checked={theme.title === 'always'}
          uncheckedIcon={false}
          checkedIcon={false}
          height={30}
          offColor={theme.colors.secondary}
          onColor={theme.colors.secondary}
        />
    </Container>
  )
}

export default Main;