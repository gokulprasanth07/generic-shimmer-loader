import React from "react";
import {ShimmerBox, ShimmerContainer, ShimmerLines, ShimmerPhoto, GlobalStyles, ShimmerPhotoCircular} from "./ShimmerStyles.js";


const ShimmerComponent = ({ shimmerOrder, isLoading=false, children }) => {
  
  const renderShimmers = () => {
    const shimmers = [];
    for (let i = 0; i < shimmerOrder.length; i++) {
      const count = shimmerOrder[i].count || 1;
      switch (shimmerOrder[i].type) {
        case "box":
          console.log(">>> order", shimmerOrder);
          shimmers.push(
            Array.from({ length: count }, (_, index) => (
              <ShimmerBox key={index} width={shimmerOrder[i].width} height={shimmerOrder[i].height} alignment={shimmerOrder[i].alignment} />
            ))
          );
          break;
        case "lines":
          shimmers.push(
            Array.from({ length: count }, (_, index) => (
              <ShimmerLines key={index} width={shimmerOrder[i].width} height={shimmerOrder[i].height} alignment={shimmerOrder[i].alignment}  />
            ))
          );
          break;
        case "photo":
          shimmers.push(
            Array.from({ length: count }, (_, index) => (
              <ShimmerPhoto key={index}  width={shimmerOrder[i].width} height={shimmerOrder[i].height} alignment={shimmerOrder[i].alignment}  />
            ))
          );
          break;
        case "photoCircular":
            shimmers.push(
              Array.from({ length: count }, (_, index) => (
                <ShimmerPhotoCircular key={index} diameter={shimmerOrder[i].diameter} alignment={shimmerOrder[i].alignment} />
              ))
            );
            break;
        default:
          break;
      }
    }
    return shimmers.flat();
  };

  return (
    <>
      <GlobalStyles />
      {isLoading ? <ShimmerContainer>{renderShimmers()}</ShimmerContainer> : <>{children}</>}
    </>
  );
};

export default ShimmerComponent;
