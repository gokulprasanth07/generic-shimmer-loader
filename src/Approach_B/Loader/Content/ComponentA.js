import styled from "@emotion/styled";
import pic from "./images/img-22.jpg"

const Wrapper = styled.span({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginLeft: '200px',
  marginTop: '55px'
});

const ImgWrapper = styled.div`
  border-radius: 6px;
`;

const Box = styled.div({
  paddingTop: '12px'
});

const ComponentA = () => {
  return (
    <Wrapper>
      {" "}
      <ImgWrapper><img width={260} height={260} src={pic}></img></ImgWrapper>
      <div>first line of text, here the picture</div>
      <div>first line of text, here the picture</div>
      <div>first line of text</div>
      <Box><img width={600} height={200} src={pic}></img></Box>


      <div></div>
    </Wrapper>
  );

};

export default ComponentA;
