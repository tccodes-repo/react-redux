import React from 'react';

const Header = ({ content }) => {
    return (
        <h2>{content || "Please provide a header"}</h2>
    );
}

export default Header;