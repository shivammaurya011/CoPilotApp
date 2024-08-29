import React from 'react';
import { CompanySection, QuestionSection } from '../components/sections';

function Home() {
  return (
    <div className="p-2 relative">
      <CompanySection />
      {/* Adjust the height to correctly position based on CompanySection */}
      <div className="pt-[60px] h-[calc(100vh-60px)]"> 
        <QuestionSection />
      </div>
    </div>
  );
}

export default Home;
