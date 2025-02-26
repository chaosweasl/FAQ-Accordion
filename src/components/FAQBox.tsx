import starIcon from "../assets/images/icon-star.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import "../App.css";

export default function FAQBox() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          id="FAQ-card"
          className=" h-1000 
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
    </>
  );
}

// <div id="FAQ-content">
//   <div id="title" className="text-black text-2xl">
//     a
//   </div>
// </div>
