import React from 'react'

const PersonalInfo = () => {
  return (
    <div>
      <div className='profile-option-container'>
      <div className="profile-card">

         <p className="profile-card-title">We use cookies.</p>
         <p className="profile-card-option">This website uses cookies to ensure you get the best experience on our site.</p>
      </div>


      
      

      <div className="update-info">
        <div className="picture-left">
        <img className='info-picture' src="" alt="" />
        </div>
          <div className="infomation-right">
            <p>Personal Information</p>
              <div className='update-details'>

                <input type="text" /><br />
                <input type="text" /><br />
                <input type="email" /><br />
                <input type="text" /><br />
                <button>Update</button>
              </div>   
              </div> <br />
       
      
     
    
</div>

        
      </div>
    </div>
  )
}

export default PersonalInfo