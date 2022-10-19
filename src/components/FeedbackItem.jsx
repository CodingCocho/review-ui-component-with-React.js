import {useState} from 'react';
import {FaEdit, FaTimes} from 'react-icons/fa';
import './styles/FeedbackItem.css';

// FeedbackItem serves as the container which will hold the data of each review
export const FeedbackItem = (props) =>
{

    // Deconstruct props
    const {deleteHandler, id, review} = props;

    // Set states for the rating and text since it will be immutable
    const [componentRating, setComponentRating] = useState(review.rating);
    const [componentText, setComponentText] = useState(review.text);

    // Conditional rendering check in case of empty props
    if(!review)
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
                color="#119822"
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