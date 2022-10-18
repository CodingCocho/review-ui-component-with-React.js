import React from 'react'
import './styles/Header.css';

// Header serves as our navbar for the web application
export const Header = (props) =>
{

    // Deconstruct prop data
    const {text} = props;

    return (
            <>

                {/* Container for the component */}
                <div 
                className="container"
                >

                    {/* Hold the name of the web application */}
                    <h1>
                        {text}
                    </h1>
                </div>
            </>
    )
}
