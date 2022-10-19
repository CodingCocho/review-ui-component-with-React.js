import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';
import { RatingRadio } from './RatingRadio';
import './styles/FeedbackForm.css';

export const FeedbackForm = (props) =>
{

    // Deconstruct props
    const {addHandler} = props;

    // Set our useStates for the form
    const [disabledMessage, setDisabledMessage] = useState('');
    const [isDisabled, setDisable] = useState(true);
    const [userRating, setUserRating] = useState(10)
    const [reviewText, setReviewText] = useState('');
    
    // Component Functions

    /* 
    Updates the reviewText useState and shows message
    depending if reviewText is valid to submit
    @param e to target element's value
    @return none 
  */
    const inputHandler = (e) => 
    {
        
        // Check for empty input element 
        if(reviewText === ' ')
        {

            // Disable button
            setDisable(true);
            
            // Display no message
            setDisabledMessage(null);
        }

        // Check if user has typed and reviewText is appropriate length
        else if(reviewText !== ' ' && reviewText.trim().length < 9)
        {
            
            // Disable button
            setDisable(true);

            // Display disabledMessage
            setDisabledMessage('Review must be at least 10 characters');
        }

        // Else the reviewText is appropriate
        else
        {

            // Allow submission of form
            setDisable(false)

            // Display no message
            setDisabledMessage(null);
        }

        // Update reviewText useState
        setReviewText(e.target.value);
    }

    /* 
    Updates the userRating useState and applies class
    styles accordingly
    @param selectedRating rating that was selected by the user
    @return none 
  */
    const ratingHandler = (selectedRating) =>
    {

        // Hold all RatingRadio components
        const ratingRadios = document.getElementById('ratings').children;

        // Remove the past selected radio
        ratingRadios[userRating-1].classList.remove('selected-radio')

        // Add the unselected-radio class
        ratingRadios[userRating-1].classList.add('unselected-radio');

        // Add the selected-radio class to the selected RatingRadio
        ratingRadios[selectedRating-1].classList.add('selected-radio')

        // Update the userRating useState
        setUserRating(selectedRating);
    }

    /* 
    Updates the App by adding the newFeedback object into
    our existing data state in App.jsx
    @param e event to prevent form submission
    @return none 
  */
    const submitHandler = (e) =>
    {

        // Prevents page refresh
        e.preventDefault();

        // Check if reviewText is appropriate to submit
        if(reviewText.trim().length > 9)
        {

            // Hold a new feedback object
            const newFeedback = 
            {
                id: uuidv4(),
                rating: userRating,
                text: reviewText
            }

            // Use prop handler function to add newFeedback
            addHandler(newFeedback)

            // Update userRating to default RatingRadio
            setUserRating(10);

            // Update reviewText useState to empty string
            setReviewText('')
        }
    }

    return (
        <>
            {/* Hold the container that wraps the form */}
            <div 
            className="form-container"
            >
                {/* Establish the form element */}
                <form
                onSubmit={submitHandler}
                >
                    
                    {/* Instructions for the user */}
                    <p
                    className="form-instructions"
                    >
                        How would you rate your service with us?
                    </p>
                    
                    {/* Hold all the RatingRadio components */}
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
                    
                    {/* Container to wrap the input field */}
                    <div 
                    className="input-container"
                    >
                        
                        {/* Hold our input element to keep track of review message*/}
                        <input 
                        id="feedback-input"
                        onChange={inputHandler}
                        placeholder="Write a review"
                        type="text" 
                        value={reviewText}
                        />

                        {/* Hold our button that will submit the form to add a new review */}
                        <button
                        disabled={isDisabled}
                        id="form-button" 
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