import './styles/FeedbackStats.css';

export const FeedbackStats = (props) =>
{

    const {feedbackData} = props;

    const accumulateAverage = () =>
    {
        return (feedbackData.reduce(((accumulator, currentReview) => 
        {
            console.log(accumulator)
            return accumulator + currentReview.rating
        }),0) / feedbackData.length).toFixed(1).replace(/[.,]-$/, ' ');
    }

    return (
        <>
            <div 
            className="feedback-stats-container"
            >
                <p 
                className="total-review"
                >
                    {feedbackData.length} Reviews
                </p>
                <p 
                className="average-rating"
                >
                    Average Rating: {isNaN(accumulateAverage()) ? 0 : accumulateAverage()}
                </p>
            </div>
        </>
    )
}