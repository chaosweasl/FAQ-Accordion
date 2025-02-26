import starIcon from "../assets/images/icon-star.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

export default function FAQBox() {
  return (
    <>
      <div
        className="box-desktop absolute top-1/2 left-1/2 transform -translate-x-1/2 
      -translate-y-1/2 h-110 w-140 bg-white rounded-3xl"
      ></div>
      <div
        className="box-mobile absolute top-1/2 left-1/2 transform -translate-x-1/2 
      -translate-y-1/2 h-110 w-80 bg-white rounded-3xl"
      ></div>
    </>
  );
}
