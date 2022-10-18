import {useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import './styles/FeedbackItem.css';

// FeedbackItem serves as the container which will hold the data of each review
export const FeedbackItem = (props) =>
{

    // Deconstruct review data
    const {deleteHandler, id, rating, review} = props;

    // Set states for the rating and text since it will be immutable
    const [componentRating, setComponentRating] = useState(rating);
    const [componentText, setComponentText] = useState(review);

    // Conditional rendering check in case of empty props
    if(!rating && !review)
    {
        return(
            <>
            </>
        )
    }
    
    // Return the FeedbackItem component
    return (
        <>

            {/* Holds the rating and text */}
            <div 
            className="feedback-container"
            >
                
                {/* Relative container that holds the rating */}
                <div 
                className="rating-container"
                >
                    {componentRating}
                </div>

                {/* Hold the icon to delete */}
                <FaTimes
                className="close-icon"
                color="purple"
                onClick={() => deleteHandler(id)}
                >
                </FaTimes>
                
                {/* Hold the review text */}
                <p 
                className="rating-text"
                >
                    {componentText}
                </p>
            </div>
        </>
    )
}