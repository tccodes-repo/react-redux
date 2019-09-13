import React from 'react';

const Header = ({ content }) => (
    <h2>{content || "Please provide a header"}</h2>
);

export default Header;