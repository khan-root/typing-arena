// ThemeSelector.js
import React from 'react';
import useStore from '../../Store/Store';
const ThemeSelector = () => {
    const setTheme = useStore((state)=> state.setTheme)

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="p-4">
      <label htmlFor="theme" className="block mb-2">
        Select Theme:
      </label>
      <select id="theme" onChange={handleChange} className="border p-2 rounded">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        {/* Add more options here */}
        <option value="customTheme1">Custom Theme 1</option>
        <option value="customTheme2">Custom Theme 2</option>
        {/* Continue for all 100 themes */}
      </select>
    </div>
  );
};

export default ThemeSelector;
