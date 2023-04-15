import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export {FAQItem};
