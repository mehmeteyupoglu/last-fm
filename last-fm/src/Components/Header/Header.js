import React from 'react';
import { StyledHeader } from "./styles"

const Header = () => {
    
    return (
        <div>
            <StyledHeader>
                <img 
                src="https://www.last.fm/static/images/lastfm_logo_facebook.1b63d4451dcc.png" 
                alt="Last Fm logo"
                className="logo"   
                />
            </StyledHeader>
        </div>
    );
}

export default Header;
