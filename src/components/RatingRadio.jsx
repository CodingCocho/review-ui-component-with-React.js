import './styles/RatingRadio.css'

export const RatingRadio = (props) =>
{

    // Deconstruct props
    const {isSelected, rating, selectedHandler} = props;

    return (
        <>
            {/* Container for RatingRadio that conditionally renders its style class
            based on if the RatingRadio was selected */}
            <div 
            className={isSelected ? "selected-radio" : "unselected-radio"}
            
            // Use prop function to handle the selection of the RatingRadio
            onClick={() => selectedHandler(rating)}
            >
                
                {/* Display rating from props */}
                {rating}
            </div>
        </>
    )
}