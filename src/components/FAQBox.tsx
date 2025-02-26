import starIcon from "../assets/images/icon-star.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import "../App.css";

export default function FAQBox() {
  return (
    <>
      <div id="FAQ-box">
        <div
          className="absolute top-1/2 left-1/2 
          transform -translate-x-1/2 -translate-y-1/2 h-110 
          w-80 sm:w-140 bg-white rounded-xl p-6"
        >
          <h1 className="text-3xl flex items-center">
            <img className="w-6 h-6" src={starIcon} />
            <b className="ml-5 font-[WorkSans]">FAQs</b>
          </h1>
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
