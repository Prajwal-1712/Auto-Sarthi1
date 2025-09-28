import React from 'react';
import './FaqSection.css'; // Create and import a CSS file for styling

const faqs = [
  {
    question: "How do I book a rickshaw?",
    answer: "Simply enter your pickup and drop locations, choose your rickshaw, and confirm your booking. It's that easy!",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, credit/debit cards, and digital wallets for your convenience.",
  },
  {
    question: "Is it safe to ride with Auto-Sarathi?",
    answer: "Yes! All our drivers are verified, and every ride is tracked for your safety and security.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "You can cancel your booking free of charge up to 2 minutes after confirmation.",
  },
  {
    question: "How are fares calculated?",
    answer: "Fares are calculated based on distance and time, with transparent pricing shown upfront before booking.",
  },
  {
    question: "Do you operate 24/7?",
    answer: "Yes, Auto-Sarathi operates round the clock to ensure you can book a ride whenever you need one.",
  },
];

const FaqSection = () => {
  return (
    <div className='baground' >
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-columns">
        <div className="faq-column">
          {faqs.slice(0, 3).map((faq, idx) => (
            <div key={idx} className="faq-item">
              <p className="faq-question">{faq.question}</p>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="faq-column">
          {faqs.slice(3).map((faq, idx) => (
            <div key={idx} className="faq-item">
              <p className="faq-question">{faq.question}</p>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FaqSection;
