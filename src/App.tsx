import BackgroundComponent from "./components/BackgroundComponent";
import FAQBox from "./components/FAQBox";

function App() {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <BackgroundComponent />
        <FAQBox />
      </div>
    </>
  );
}

export default App;
