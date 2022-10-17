import React from 'react'
import './styles/Header.css';

export const Header = (props) =>
{
    const {text} = props;

    return (
            <>
                <div 
                className="container"
                >
                    <h1>
                        {text}
                    </h1>
                </div>
            </>
    )
}
