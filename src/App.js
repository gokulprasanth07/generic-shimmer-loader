import "./App.css";

// components consuming shimmer loader 
import NewListingPageHorizontal from "./Approach_A/Component/NewListingPageHorizontal";
import NewListingPageVertical from "./Approach_A/Component/NewListingPageVertical";
import CardBox from "./Approach_A/Component/CardBox";
import CardCircle from "./Approach_A/Component/CardCircle";

import ShimmerComponent from "./Approach_B/Loader/ShimmerComponent";
import ComponentA from "./Approach_B/Loader/Content/ComponentA";


function App() {
  return (
    <div className="App">
      {/* APPROACH A  */}

      {/* <CardBox/> */}
      {/* <CardCircle /> */}
      {/* <NewListingPageHorizontal /> */}
      {/* <NewListingPageVertical /> */}



      {/* APPROACH B */}
      {/* <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', top: '40%'}}>
          <ShimmerComponent
            isLoading={true}
            shimmerOrder={[
              { type: "box", count: 1, width: 260, height: 260 },
              { type: "lines", count: 1, width: 400, height: 10 },
              { type: "lines", count: 1, width: 400, height: 10 },
              { type: "lines", count: 1, width: 200, height: 10 },
              { type: "photo", count: 1, width: 600, height: 200},
              { type: "photoCircular", count: 1, diameter: 200, alignment: 'center'},
            ]}
          >
              <div><ComponentA /></div>
          </ShimmerComponent>
      </div> */}
    </div>
  );
}

export default App;
