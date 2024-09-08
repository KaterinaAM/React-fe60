import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Подключаем наш контекст темы

const Layout = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className="layout">
      <header>
        <h1>Project Name</h1>
        <button onClick={toggleTheme}>
          {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        </button>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Project Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
