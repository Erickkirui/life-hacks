import React, { useState, useEffect } from 'react';
import './tabs.css';
import HotHacks from './HotHacks';
import NewCheats from './NewCheats';

function Tabs() {
  // Retrieve active tab from local storage or default to tab 1
  const [activeTab, setActiveTab] = useState(parseInt(localStorage.getItem('activeTab')) || 1);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    // Store active tab in local storage
    localStorage.setItem('activeTab', tabNumber);
  };

  useEffect(() => {
    // Cleanup localStorage on component unmount
    return () => {
      localStorage.removeItem('activeTab');
    };
  }, []);

  return (
    <div className="tabs-container">
      {/* Tab buttons */}
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Hot hacks
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          New Hacks
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {/* Render content based on active tab */}
        {activeTab === 1 && <div><HotHacks /></div>}
        {activeTab === 2 && <div><NewCheats/></div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}

export default Tabs;
