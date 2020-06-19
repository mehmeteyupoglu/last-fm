import React,  { useEffect } from 'react';
import { data } from "../../data.js"

const Header = () => {

    useEffect(() => {
        // Update the document title using the browser API
        console.log(data)
      });
    
    return (
        <div>
            <h1>I am the Header</h1>
        </div>
    );
}

export default Header;
