import './styles/RatingRadio.css'

export const RatingRadio = (props) =>
{

    const {isSelected, rating} = props;

    return (
        <>
            <div 
            className={isSelected ? "selected-radio" : "unselected-radio"}
            >
                {rating}
            </div>
        </>
    )
}