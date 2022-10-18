import {useState} from 'react';
import { RatingRadio } from './RatingRadio';
import './styles/FeedbackForm.css';

export const FeedbackForm = () =>
{

    const [disabledMessage, setDisabledMessage] = useState('');
    const [isDisabled, setDisable] = useState(true);
    const [userRating, setUserRating] = useState(10)
    const [reviewText, setReviewText] = useState('');
    
    
    const inputHandler = (e) => 
    {
        if(reviewText === ' ')
        {
            setDisable(true);
            setDisabledMessage(null);
        }
        else if(reviewText !== ' ' && reviewText.trim().length < 9)
        {
            setDisable(true);
            setDisabledMessage('Review must be 10 characters');
        }
        else
        {
            setDisable(false)
            setDisabledMessage(null);
        }
        setReviewText(e.target.value);
    }

    return (
        <>
            <div 
            className="form-container"
            >
                <form>
                    
                    <p
                    className="form-instructions"
                    >
                        How would you rate your service with us?
                    </p>
                    
                    <div 
                    className="ratings-container"
                    >
                        <RatingRadio 
                        isSelected={userRating === 1}
                        rating={1}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 2}
                        rating={2}
                        />   
                        <RatingRadio 
                        isSelected={userRating=== 3}
                        rating={3}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 4}
                        rating={4}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 5}
                        rating={5}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 6}
                        rating={6}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 7}
                        rating={7}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 8}
                        rating={8}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 9}
                        rating={9}
                        />   
                        <RatingRadio 
                        isSelected={userRating === 10}
                        rating={10}
                        />   
                    </div>
                    
                    <div 
                    className="input-container"
                    >
                        
                        {/* Hold our input element to keep track of review message*/}
                        <input 
                        onChange={inputHandler}
                        placeholder="Write a review"
                        type="text" 
                        value={reviewText}
                        />

                        {/* Hold our button that will submit the form to add a new review */}
                        <button
                        disabled={isDisabled} 
                        type="submit"
                        >
                            Send
                        </button>
                    </div>

                    {/* Conditional render the character limit message based on input state */}
                    {
                        disabledMessage && 
                        <div 
                        className="disabled-message"
                        >
                            {disabledMessage}
                        </div>
                    }
                </form>
            </div>
        </>
    )
}