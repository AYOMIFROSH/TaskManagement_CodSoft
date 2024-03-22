import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', position: 'fixed'}} className='sidebar'>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Management
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink  to="#" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/tables" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/profile" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/analytics" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/." target="_blank" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 Page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink  to="/login" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt">SignOut</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              color: 'red'
            }}
          >
            <NavLink  to="/account" activeclassname="activeClicked"><b style={{color: 'red'}}>TaskZen</b></NavLink>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
