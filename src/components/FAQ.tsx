// Assets
import desktopBg from "../assets/images/background-pattern-desktop.svg";
import mobileBg from "../assets/images/background-pattern-mobile.svg";
import starIcon from "../assets/images/icon-star.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

// React
import { useState } from "react";

// Dependencies
import "../App.css";

export default function FAQ() {
  const faqItems = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer: `Frontend Mentor offers realistic coding challenges 
    to help developers improve their frontend coding 
    skills with projects in HTML, CSS, and JavaScript. It's 
    suitable for all levels and ideal for portfolio building.`,
    },
    {
      question: `Is Frontend Mentor free? `,
      answer: `Yes, Frontend Mentor offers both free and premium 
    coding challenges, with the free option providing access to a 
    range of projects suitable for all skill levels.`,
    },
    {
      question: `Can I use Frontend Mentor projects in my portfolio?`,
      answer: `Yes, you can use projects completed on Frontend Mentor 
    in your portfolio. It's an excellent way to showcase your skills to 
    potential employers!`,
    },
    {
      question: `How can I get help if I'm stuck on a Frontend Mentor 
      challenge?`,
      answer: `The best place to get help is inside Frontend Mentor's 
      Discord community. There's a help channel where you can ask 
      questions and seek support from other community members.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [icons, setIcons] = useState(Array(faqItems.length).fill(plusIcon));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    setIcons((prevIcons) =>
      prevIcons.map((icon, i) =>
        i === index ? (icon === plusIcon ? minusIcon : plusIcon) : icon
      )
    );
  };

  return (
    <>
      <div className="min-h-screen custom-bg-color">
        {/* UI + Header depending on screen size */}
        <img className="bg-desktop w-full" src={desktopBg} />
        <img className="bg-mobile w-full" src={mobileBg} />

        {/* FAQ Container */}
        <div className="flex justify-center items-center">
          {/* FAQ card design*/}
          <div
            id="FAQ-card"
            className=" h-auto w-80 sm:w-140 bg-white rounded-xl p-6"
          >
            {/* FAQ title */}
            <div id="FAQ-title" className="flex items-center m-1">
              <img className="w-6 h-6" src={starIcon} />
              <b className="ml-5 text-3xl font-[WorkSans]">FAQs</b>
            </div>

            {/* FAQ list */}
            <ul className="w-full max-w-md mx-auto">
              {faqItems.map((item, index) => (
                <li
                  key={index}
                  className="faq-item pb-5 pt-5 border-gray-300 border-b last:border-b-0"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between
                    cursor-pointer text-left"
                  >
                    <span className="font-bold">{item.question}</span>
                    <img src={icons[index]} className="w-8 h-8" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
