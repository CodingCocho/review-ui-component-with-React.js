import {useState} from 'react';

export const FeedbackItem = (props) =>
{

    const {rating, review} = props;
    const [componentRating, setComponentRating] = useState(rating);
    const [componentText, setComponentText] = useState(review);

    return (
        <>
            <div 
            className="feedback-container"
            >
                <div 
                className="rating-container"
                >
                    {componentRating}
                </div>
                <p 
                className="rating-text"
                >
                    {componentText}
                </p>
            </div>
        </>
    )
}