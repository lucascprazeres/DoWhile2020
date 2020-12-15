import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';

import GlobalStyle from './styles/global';

import always from './styles/themes/always';
import learning from './styles/themes/learning';


function App() {
  const [currentTheme, setCurrentTheme] = useState(always);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.title === 'always' ? learning : always);
  };

  useEffect(() => console.log(currentTheme), [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Main toggleTheme={toggleTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
