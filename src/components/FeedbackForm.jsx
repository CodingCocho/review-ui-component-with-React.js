import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';
import { RatingRadio } from './RatingRadio';
import './styles/FeedbackForm.css';

export const FeedbackForm = (props) =>
{

    const {addHandler} = props;

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

    const ratingHandler = (selectedRating) =>
    {
        const ratingRadios = document.getElementById('ratings').children;
        ratingRadios[userRating-1].classList.remove('selected-radio')
        ratingRadios[userRating-1].classList.add('unselected-radio');
        ratingRadios[selectedRating-1].classList.add('selected-radio')
        setUserRating(selectedRating);
    }

    const submitHandler = (e) =>
    {
        e.preventDefault();
        if(reviewText.trim().length > 9)
        {
            const newFeedback = 
            {
                id: uuidv4(),
                rating: userRating,
                text: reviewText
            }
            addHandler(newFeedback)
        }
    }

    return (
        <>
            <div 
            className="form-container"
            >
                <form
                onSubmit={submitHandler}
                >
                    
                    <p
                    className="form-instructions"
                    >
                        How would you rate your service with us?
                    </p>
                    
                    <div 
                    className="ratings-container"
                    id="ratings"
                    >
                        <RatingRadio 
                        id={1}
                        isSelected={userRating === 1}
                        rating={1}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={2}
                        isSelected={userRating === 2}
                        rating={2}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={3}
                        isSelected={userRating=== 3}
                        rating={3}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={4}
                        isSelected={userRating === 4}
                        rating={4}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={5}
                        isSelected={userRating === 5}
                        rating={5}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={6}
                        isSelected={userRating === 6}
                        rating={6}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={7}
                        isSelected={userRating === 7}
                        rating={7}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={8}
                        isSelected={userRating === 8}
                        rating={8}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={9}
                        isSelected={userRating === 9}
                        rating={9}
                        selectedHandler={ratingHandler}
                        />   
                        <RatingRadio 
                        id={10}
                        isSelected={userRating === 10}
                        rating={10}
                        selectedHandler={ratingHandler}
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