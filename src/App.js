import "./App.css";

// components consuming shimmer loader 
import NewListingPageHorizontal from "./Approach_A/Component/NewListingPageHorizontal";
import NewListingPageVertical from "./Approach_A/Component/NewListingPageVertical";
import CardBox from "./Approach_A/Component/CardBox";
import CardCircle from "./Approach_A/Component/CardCircle";


function App() {
  return (
    <div className="App">
      <CardBox/>
      {/* <CardCircle /> */}
      {/* <NewListingPageHorizontal /> */}
      {/* <NewListingPageVertical /> */}
    </div>
  );
}

export default App;
