import React from 'react'
import { useLocation } from 'react-router-dom';

export const Header = () => {

    const location = useLocation();

    const name = location.state.name;

  return (
    <div>
        <nav className='nav' style={{backgroundColor: 'grey'}}>
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
        <div style={{margin: '20px'}}>
            <h4 style={{color: 'red', cursor: 'pointer', fontSize: '1.3rem'}}><cite style={{color: 'blue'}}>Welcome,</cite> <b>{name}!</b></h4>
        </div>
    </div>
  );
};

export default Header;
