import React, { useState } from 'react';
import { InfoButton } from '../buttons';

function CompanySection() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="fixed top-0 left-0 right-0 flex items-center justify-start gap-2 m-2 z-10">
      <InfoButton isActive={isActive} setIsActive={setIsActive} />
      <div className="flex flex-col text-white">
        <h2 className="text-sm">ACME Inc.</h2>
        <h1 className="text-lg font-medium">First Discovery call</h1>
      </div>
    </section>
  );
}

export default CompanySection;
