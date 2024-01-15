import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav className='nav'>
            <div className='nav-left'>
                <strong><a className='brand' href='#'>
                    TaskZen
                </a></strong>
            </div>
            <div className='nav-right'>
                <div className='tabs'>
                    <strong><a href='#'>Task Manager</a></strong>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Header;
