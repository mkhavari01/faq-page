import React, { useEffect, useState } from 'react';
import {FAQItem} from '../components/FAQItem';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchFaqs } from '../redux/slices';

interface FAQ {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    // Fetch the FAQ data from an API 
    // and update the state with the data
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL!);
      const data = await response.json();
      setFaqs(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))} */}
      {console.log(faqs,"ius the daata")!}
    </div>
  );
};

export {FAQPage};