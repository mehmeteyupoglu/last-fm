import React from 'react';
import { StyledHeader } from "./styles"

const Header = () => {
    
    return (
        <div>
            <StyledHeader>
                <img 
                src="https://fontmeme.com/images/Last.fm-Logo.jpg" 
                alt="Last Fm logo"
                className="logo"   
                />
            </StyledHeader>
        </div>
    );
}

export default Header;
