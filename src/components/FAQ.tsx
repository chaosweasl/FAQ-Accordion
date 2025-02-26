import desktopBg from "../assets/images/background-pattern-desktop.svg";
import mobileBg from "../assets/images/background-pattern-mobile.svg";
import starIcon from "../assets/images/icon-star.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import "../App.css";

export default function FAQ() {
  return (
    <>
      <div className="min-h-screen custom-bg-color">
        {/* UI + Header depending on screen size */}
        <img className="bg-desktop w-full" src={desktopBg} />
        <img className="bg-mobile w-full" src={mobileBg} />

        <div className="flex justify-center items-center min-h-screen">
          <div
            id="FAQ-card"
            className=" h-auto 
          w-80 sm:w-140 bg-white rounded-xl p-6"
          >
            <div id="FAQ-title" className="flex items-center m-1">
              <img className="w-6 h-6" src={starIcon} />
              <b className="ml-5 text-3xl font-[WorkSans]">FAQs</b>
            </div>
            <ul>
              <li className="faq-item">
                <div className="faq-item-header">a</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
