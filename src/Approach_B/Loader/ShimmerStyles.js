import styled from "@emotion/styled";

// Styles
const shimmerBackground = (width, height) => `
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: ${width}px ${height}px;
  display: inline-block;
  position: relative;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
`;

const boxStyle = (width, height) => `
  height: ${height}px;
  width: ${width}px;
  margin-top: 15px;
  border-radius: 6px;
`;

const containerStyle = `
  display: inline-flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 15px;
  vertical-align: top;
  border-radius: 6px;

`;

const shimmerPhotoCircularStyle = (diameter, alignment) => `
  height: ${diameter}px;
  width: ${diameter}px;
  border-radius: 50%;
  display: block!important;
  margin-top: 15px !important;
  margin: auto;
`;

const linesStyle = (width, height) => `
  height: ${height}px;
  width: ${width}px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding-top:12px;
`;

const photoStyle = (width, height) => `
  height: ${height}px;
  width: ${width}px;
  display: block!important;
  margin-top: 15px !important;
  border-radius: 6px;
`;

// Keyframes
const placeholderShimmerKeyframes = `
  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

// Styled components
const ShimmerBox = styled.div(({ width, height, alignment}) => `
  ${shimmerBackground(width, height)};
  ${boxStyle(width, height, alignment)};
`);

const ShimmerContainer = styled.div`
  ${containerStyle};
`;

const ShimmerLines = styled.div(({ width, height, alignment }) => `
  ${shimmerBackground(width, height)};
  ${linesStyle(width, height, alignment)};
`);

const ShimmerPhoto = styled.div(({ width, height, alignment }) => `
  ${shimmerBackground(width, height)};
  ${photoStyle(width, height, alignment)};
`);

const ShimmerPhotoCircular = styled.div(({ diameter, alignment }) => `
  ${shimmerBackground(diameter, diameter)};
  ${shimmerPhotoCircularStyle(diameter, alignment)};
`);

const GlobalStyles = styled.div`
  ${placeholderShimmerKeyframes};
`;

export { ShimmerBox, ShimmerContainer, ShimmerLines, ShimmerPhoto, GlobalStyles, ShimmerPhotoCircular };
