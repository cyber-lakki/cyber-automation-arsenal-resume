
import React from 'react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
      {children}
    </h2>
  );
};

export default SectionTitle;
