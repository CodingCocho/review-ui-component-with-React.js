import './styles/RatingRadio.css'

export const RatingRadio = (props) =>
{

    const {isSelected, rating, selectedHandler} = props;

    return (
        <>
            <div 
            className={isSelected ? "selected-radio" : "unselected-radio"}
            onClick={() => selectedHandler(rating)}
            >
                {rating}
            </div>
        </>
    )
}