
'use client'
import { useState } from "react";

interface AccordionItemTypes {
  question: string;
  answer: string;
}

const accordionData: AccordionItemTypes[] = [
  {
    question: "Is this one-on-one or group tuition?",
    answer:
      "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
  },
  {
    question: "Do you provide flexible timings?",
    answer:
      "Yes, we provide flexible class timings depending on student availability and teacher slots.",
  },
  {
    question: "How do I book a demo class?",
    answer:
      "You can easily book a free 30-minute demo session directly from our website in just a few clicks.",
  },
  {
    question: "What subjects do you cover?",
    answer:
      "We cover Mathematics, Science, English, and more across different grades.",
  },
];

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="cont">
      <div className="flex flex-col lg:flex-row px-3 md:px-10 lg:px-28 py-5 lg:py-10 gap-10 lg:px-10 px-3">
        {/* Information container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between lg:mb-8">
          <div className="w-[100%] md:w-[100%] lg:w-[80%] ">
            <h3 className="text-forest text-2xl md:text-4xl lg:text-5xl leading-none mb-5 font-bold text-center lg:text-start">
              Common Questions Parents Ask
            </h3>
            <p className="text-center lg:text-start text-gray-600">
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan.
            </p>
          </div>
          <h2 className="text-[#4984FC] text-center lg:text-start hidden lg:block mt-6">
            More FAQ
          </h2>
        </div>

        {/* Accordion container */}
        <div className="w-full lg:w-1/2">
          {accordionData.map((item, i) => (
            <div key={i} className="mb-5">
              <button
                className="flex justify-between w-full text-forest font-bold text-left text-lg focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.question}
                <span className="ml-4">{openIndex === i ? "-" : "+"}</span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-40 mt-2" : "max-h-0"
                  }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>

              <hr className="bg-forest h-[1.5px] my-6" />
            </div>
          ))}
          <h2 className="text-[#4984FC] text-center lg:text-start lg:hidden">
            More FAQ
          </h2>
        </div>
      </div>
    </div>
  );
};
