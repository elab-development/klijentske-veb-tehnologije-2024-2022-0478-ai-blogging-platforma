import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from './NavMenu';

const Layout: React.FC = () => {
    const links = [
        { to: '/', label: 'Home' },
        { to: '/login', label: 'Login' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact' }
    ];

    return (
        <div>
            <NavMenu links={links} />
            <Outlet />
        </div>
    );
};

export default Layout;
