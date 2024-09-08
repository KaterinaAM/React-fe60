import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AllPosts from './pages/Allposts';

const App = () => {
  return (
    <ThemeProvider>
      <AllPosts />
    </ThemeProvider>
  );
};

export default App;
