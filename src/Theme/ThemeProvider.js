// ThemeProvider.js
import React from 'react';
import useStore from '../Store/Store';
import themes from './Theme';

const ThemeProvider = ({ children }) => {
  const theme = useStore((state)=> state.theme)
  const currentTheme = themes[theme];
  const themeStyles = {
    backgroundColor: currentTheme.background,
    color: currentTheme.text,
    borderColor: currentTheme.border,
  };


  return (
    <div
      style={themeStyles}
      className="min-h-screen transition duration-500 ease-in-out"
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
