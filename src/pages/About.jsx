import {Link} from 'react-router-dom';
import './styles/About.css';

export const About = () =>
{
    return (
        <>
            {/* Hold the About page information */}
            <div 
            className="about-container"
            >
                
                {/* Title of page */}
                <h1>About This Project</h1>

                {/* App information for user */}
                <p>This is a React app to leave feedback for a product or service</p>
                
                {/* Hold version of web application */}
                <p>Version: 1.0.0</p>
                
                {/* Wrap the Link component in a p tag */}
                <p>
                    {/* Use Link to navigate back to home route */}
                    <Link to='/'>Back To Home</Link>
                </p>
            </div>
        </>
    )
}