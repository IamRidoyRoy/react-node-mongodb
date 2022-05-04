import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link> <br />
            <Link to='/user/add'>User Add</Link>
        </div>
    );
};

export default Header;