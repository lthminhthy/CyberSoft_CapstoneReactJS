import React, { useState } from 'react'
import { Tabs } from 'antd';

const HomeMenu = () => {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
      setTabPosition(e.target.value);
    };
    return (
      <>
       
        <Tabs
          tabPosition={tabPosition}
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab ${id}`,
            };
          })}
        />
      </>
    );
  };

export default HomeMenu