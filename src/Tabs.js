// Tabs.js
import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul className="tab-titles">
        {tabs.map((tab, index) => (
          <li 
            key={index} 
            onClick={() => setActiveTab(index)} 
            className={index === activeTab ? 'active' : ''}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
