import React from 'react';
import Todo from './todo';
import Sliding from './Sidebar/slideing';

const Layout = () => {
  return (
    <div className='profile-picture-background'>
        <div style={{}}>
            {/* <Sliding /> */}
            <div style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
              <Todo />
            </div>
        </div>
    </div>
  );
};

export default Layout;

