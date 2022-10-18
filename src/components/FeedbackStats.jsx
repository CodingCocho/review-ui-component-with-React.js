import './styles/FeedbackStats.css';

export const FeedbackStats = (props) =>
{

    // Deconstruct props
    const {feedbackData} = props;

    // Component Functions

    /* 
    Calculates the average of all the ratings in feedbackData
    @param none
    @return average of ratings 
  */
    const accumulateAverage = () =>
    {

        // Use reduce method to accumulate the ratings of each feedback object
        return (feedbackData.reduce(((accumulator, currentReview) => 
        {

            // Return the accumulated rating each iteration
            return accumulator + currentReview.rating
        }),0) / feedbackData.length).toFixed(1).replace(/[.,]-$/, ' ');
    }

    return (
        <>

            {/* Hold stats from the feedbackData */}
            <div 
            className="feedback-stats-container"
            >
                
                {/* Holds the total amount of reviews */}
                <p 
                className="total-review"
                >
                    {feedbackData.length} Reviews
                </p>
                
                {/* Holds the average rating that is calculated using our component function */}
                <p 
                className="average-rating"
                >
                    
                    {/* Conditional render the average */}
                    Average Rating: {isNaN(accumulateAverage()) ? 0 : accumulateAverage()}
                </p>
            </div>
        </>
    )
}