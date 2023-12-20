import React from 'react';
import LogIn from './LogIn';
import Dashboard from './Dashboard';
const Main = () => {
  return (
    <div>
      <main className="main-container">
        <div>
        
            <LogIn /> <br />
            <Dashboard/>
          
        </div>
      </main>
    </div>
  );
};

export default Main;
