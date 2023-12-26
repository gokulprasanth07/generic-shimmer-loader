import * as React from "react";
import ShimmerLoader from "../ShimmerLoader/ShimmerLoader";
import styled from "@emotion/styled";
import Toggle from "../ShimmerLoader/Toggle";
import student from "./student.jpg";

export default function CardCircle() {
  const [loading, setLoading] = React.useState(true);

  const LineContent = styled.div`
    line-height: 2;
  `;

  const CardWrapper = styled.div`
    background: "#FBFCFE";
    border-radius: 12px;
    border: 1px solid lightgrey;
  `;

  const Image = styled.img`
    border-radius: 6px;
  `;


  const Card = styled.div`
    width: 360px;
    padding: 24px;
  `;


  const ProfileTitle= styled.div`
    font-size: 20px;
  `;

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          {/* Toggle switch UI */}
          <Toggle loading={loading} setLoading={() => setLoading(!loading)} />

          {/* Display the current state */}
          <h2>{loading === true ? "LOADING" : "NOT LOADING"}</h2>
        </div>
        <CardWrapper>
          <Card>
            {/* <Card variant="outlined" style={{ width: 360 }}> */}
            
                <ShimmerLoader hidden={!loading} isCircularImg={false}>
                    <Image
                    src={student}
                    alt=""
                    width={360}
                    height={300}
                    />
                </ShimmerLoader>



            {/* <CardContent> */}
            <div style={{ width: "100%", padding: "12px", position: "relative" }}>
              {" "}
              <ShimmerLoader hidden={!loading} inline>
                <span style={{fontSize: '20px'}}><strong>Profile</strong></span>
              </ShimmerLoader>
            </div>
          
          <LineContent>
              <ShimmerLoader hidden={!loading} inline>
                I have around 5 years and 6 months of experience in frontend tech stack. Technical Skills : React, Redux, Typescript, Javascript, HTML, CSS, REST API, GRAPHQL
              </ShimmerLoader>
            </LineContent>

          </Card>
        </CardWrapper>

      </div>
    </React.Fragment>
  );
}
