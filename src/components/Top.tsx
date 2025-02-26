import desktopBg from "../assets/images/background-pattern-desktop.svg";
import mobileBg from "../assets/images/background-pattern-mobile.svg";

export default function backgroundComponent() {
  return (
    <>
      <img className="bg-desktop w-full" src={desktopBg} />
      <img className="bg-mobile w-full" src={mobileBg} />
    </>
  );
}
