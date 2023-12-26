import React from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;

const ShimmerWrapper = styled("span")(({ parentCmptProps }) => css`
    display: ${parentCmptProps.inline ? "inline" : "block"};
    position: ${parentCmptProps.inline ? "initial" : "relative"};
    overflow: hidden;
    cursor: default;
    pointer-events: none;
    & > * {
      visibility: hidden;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    &::before {
      z-index: 9;
      background: #DDE7EE;
      width: 100%;
      ${parentCmptProps.isCircularImg ? 'border-radius: 50%;' : 'border-radius: 12px;'}
    }
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    &::after {
      animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0 0 0 / 0.08),
        transparent
      );
      transform: translateX(
        -100%
      ); 
      position: absolute;
      /* Avoid flash during server-side hydration */
      z-index: 10;
    }
  `
);


  /**
   * hidden?: boolean;
   * ShimmerLoader will be removed.
   */

  /**
   * inline?: boolean;
   * For using with text. It will display lines based on the content.
   */  

export default function ShimmerLoader({ hidden, inline, isCircularImg, children }) {
  const parentCmptProps = { hidden, inline, isCircularImg, children};
  if (hidden) {
    return (
      <>
          {children}
      </>
    );
  }

  return (
    <ShimmerWrapper parentCmptProps={parentCmptProps}>
      {children}
    </ShimmerWrapper>
  );
}
