import React from 'react';
import './App.css';
import Title from './Title';
import Tabs from './Tabs';

function App() {
  const tabsData = [
    { title: 'all' },
    { title: 'my favorite' },
    { title: 'popular'},
  ];

  return (
    <div className="App">
      <Title text="Sign In" />
      <Tabs tabs={tabsData} />
    </div>
  );
}

export default App;
