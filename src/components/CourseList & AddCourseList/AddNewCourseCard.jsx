import React from "react";
const AddNewCourseCard = () => {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
        <h1>Course List</h1>

        </div>
        <div className="AddNewCourse-container">
          <div className="AddNewCourse-card">
            <div className="AddNewCourse-card-details">
              <p className="AddNewCourse-text-title">PL001:</p>
              <h3 className='AddNewCourse-h3-card'>Java Programming</h3>
            </div>
            <button className="AddNewCourse-button">More info</button>
          </div> <br /><br />
  
          <div className="AddNewCourse-card">
            <div className="AddNewCourse-card-details">
              <p className="AddNewCourse-text-title">PL002:</p>
              <h3 className='AddNewCourse-h3-card'>Basic HTML & CSS</h3>
            </div>
            <button className="AddNewCourse-button">More info</button>
          </div> <br /><br />
  
          <div className="AddNewCourse-card">
            <div className="AddNewCourse-card-details">
              <p className="AddNewCourse-text-title">PL003:</p>
              <h3 className='AddNewCourse-h3-card'>C++ Programming</h3>
            </div>
            <button className="AddNewCourse-button">More info</button>
          </div> <br /><br />
  
          <div className="AddNewCourse-card">
            <div className="AddNewCourse-card-details">
              <p className="AddNewCourse-text-title">PL004:</p>
              <h3 className='AddNewCourse-h3-card'>C# Programming for Beginners</h3>
            </div>
            <button className="AddNewCourse-button">More info</button>
          </div> <br /><br />
          
            <button className="bbutton">More info</button>
        
        </div>
      </div>
    );
  };
  
  export default AddNewCourseCard;
  