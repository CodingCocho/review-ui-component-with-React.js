import {motion, AnimatePresence} from 'framer-motion';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {About} from '../pages/About';
import {FeedbackForm} from '../components/FeedbackForm';
import {FeedbackItem} from '../components/FeedbackItem';
import {FeedbackStats} from '../components/FeedbackStats';
import {Header} from '../components/Header';
import {FaQuestion} from 'react-icons/fa'
import reviewData from '../api/db.json';
import './styles/App.css';


// App serves as the main application page
function App() {
  
  // Import backend data 
  const backendData = reviewData.feedback;
  
  // Create a state for the data since it will be immutable
  const [data, setData] = useState(backendData);
  
  // Prop functions

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

  /* 
    Adds a new FeedbackItem component to the list
    @param newFeedbackComponent feedback object to add to existing data
    @return none 
  */
  const addFeedbackItemComponent = (newFeedbackComponent) =>
  {
      setData([newFeedbackComponent, ...data])
  }

  // Return our main app structure
  return (
    
    // Set up react-router.v6
    <BrowserRouter>
      
      {/* Hold our App that is rendered on the root  */}
      <div className="App">

        {/* Header component to display app name */}
        <Header 
        text={"Feedback UI"}
        />
        
        {/* Establish react-router route network  */}
        <Routes>

            {/* Establish home route using exact */}
            <Route
            
            // Render the element 
            element={
              <>

                {/* FeedbackForm component to handle new feedback entries */}
                <FeedbackForm 
                addHandler={addFeedbackItemComponent}
                />

                {/* FeedbackStats component to display our data useState */}
                <FeedbackStats 
                feedbackData={data}
                />

                {/* Container to hold FeedbackItem component */}
                <div 
                className="feedback-column"
                >

                  {/* Establish AnimatePresence */}
                  <AnimatePresence>
                  {
                    
                    // Map the data and return FeedbackItem component with the correct prop data 
                    data.map((review) => 
                    {
                        return (
                          
                        //  Return a motion.div to create animations for our FeedbackItem component
                          <motion.div
                          animate={{opacity:1}}
                          exit={{opacity:0}}
                          initial={{opacity:0}}
                          key={review.id}
                          layout
                          >
                            {/* Render FeedbackItem with props */}
                            <FeedbackItem
                            deleteHandler={deleteFeedbackItemComponent}
                            id={review.id}
                            key={review.id} 
                            rating={review.rating}
                            review={review.text}
                            />
                          </motion.div>
                        )
                    })
                  }
                  </AnimatePresence>
                </div>
              </>
            }
            exact
            path="/"
            >
            </Route>

            {/* Establish route for About page */}
            <Route
            element={<About/>}
            path="/about"
            >
            </Route>
        </Routes>

        {/* Holds the icon used to navigate to the About page */}
        <FaQuestion
        className="question-link"
        >

          {/* Use Link for navigation */}
          <Link to="/about"></Link>
        </FaQuestion>
      </div>
    </BrowserRouter>
  )
}

export default App
