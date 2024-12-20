import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I sign up?",
      answer:
        "Simply click on the sign-up button at the top of the page and follow the instructions.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription anytime from your account settings.",
    },
  ];

  return (
    <>
      <section id="FAQ" className="faq py-5">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "white" }}>
            Frequently Asked Questions
          </h2>
          <div
            className="accordion"
            id="faqAccordion"
            style={{ position: "relative", zIndex: "3" }}
          >
            {faqs.map((faq, index) => (
              <div
                className="accordion-item"
                style={{ backgroundColor: "rgb(30, 41, 59)" }} 
                key={index}
              >
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                    style={{ backgroundColor: "rgb(30, 41, 59)", color: "white" }}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
