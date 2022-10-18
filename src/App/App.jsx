import {useState} from 'react';
import {FeedbackForm} from '../components/FeedbackForm';
import {FeedbackItem} from '../components/FeedbackItem';
import {Header} from '../components/Header';
import reviewData from '../api/db.json';
import './styles/App.css';
import { FeedbackStats } from '../components/FeedbackStats';

// App serves as the main application page
function App() {
  
  // Import backend data 
  const backendData = reviewData.feedback
  
  // Create a state for the data since it will be immutable
  const [data, setData] = useState(backendData);

  // Component functions

  /* 
    Deletes the FeedbackItem component from the list
    @param id the index of the object in the array
    @return none 
  */
  const deleteFeedbackItemComponent = (id) =>
  {
      if(window.confirm('Are you sure you want to delete?'))
      {
          setData(data.filter(review => review.id !== id));
      }
  }
  
  // Return our main app structure
  return (
    <div className="App">
      
      {/* Header component to display app name */}
      <Header 
      text={"Feedback UI"}
      />

      <FeedbackForm />

      {/* FeedbackStats component to display our data useState */}
      <FeedbackStats 
      feedbackData={data}
      />

      {/* Container to hold FeedbackItem component */}
      <div 
      className="feedback-column"
      >
        {
          
          // Map the data and return FeedbackItem component with the correct prop data 
          data.map((review) => 
          {
            console.log(review)
              return (
                <FeedbackItem
                deleteHandler={deleteFeedbackItemComponent}
                id={review.id}
                key={review.id} 
                rating={review.rating}
                review={review.text}
                />
              )
          })
        }
      </div>
    </div>
  )
}

export default App
