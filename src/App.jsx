import React, { useEffect, useState } from 'react';
import { Auth, Home, NoMeeting } from './pages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null); 

  // Mock data fetching or state change for demonstration
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        setData({ meetingExists: true });
      }, 1000);
    }
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen w-full">
      {isLoggedIn ? (data ? <Home /> : <NoMeeting />) : <Auth setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
