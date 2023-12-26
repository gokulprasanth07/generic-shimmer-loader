import * as React from "react";
import ShimmerLoader from "../ShimmerLoader/ShimmerLoader";
import styled from "@emotion/styled";

export default function NewListingPageVertical() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data?.products?.length) {
          console.log(data.products[0]);
          setData(data.products.slice(4, 16));
        }
      });

    setTimeout(() => setLoading(false), 3500);
  }, []);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex-wrap: wrap;
    padding: 36px;
    justify-content: center;

    font-family: "arial";
  `;
  const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: "#FBFCFE";
    border-radius: 12px;
    border: 1px solid lightgrey;
  `;

  const Round = styled.div`
    border-radius: "50%";
  `;

  const Image = styled.img`
    border-radius: 4px;
    padding: 16px;
  `;

  const ImageSection = styled.div`
    width: 360;
    padding: 12px;
    width: 30%;
    border-radius: 4px;
  `;

  const PdDataSection = styled.div`
    padding-top: 76px;
    padding-right: 24px;
    padding-left: 24px;
    font-size: 20px;
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    white-space: wrap;
    text-overflow: ellipsis;
    border-radius: 4px;
  `;

  const PriceSection = styled.div`
    padding-top: 56px;
    font-size: 24px;
    width: 30%;
    border-radius: 4px;
    line-height: 2;
  `;

  return (
    <React.Fragment>
      <Wrapper>
        {data.map((pd) => (
          <CardWrapper>
            <ImageSection>
              {/* img */}
              <ShimmerLoader hidden={!loading}>
                <Round>
                  <Image src={pd?.images[0]} alt="" width={420} height={300} />
                </Round>
              </ShimmerLoader>{" "}
            </ImageSection>

            <PdDataSection>
              <ShimmerLoader hidden={!loading} inline>
                <li>brand name : {pd?.brand}</li>
              </ShimmerLoader>
              <br />
              <ShimmerLoader hidden={!loading} inline>
                <li>category : {pd?.category}</li>
              </ShimmerLoader>
              <br />
              <ShimmerLoader hidden={!loading} inline>
                <li>description : {pd?.description}</li>
              </ShimmerLoader>
              <br />
              <ShimmerLoader hidden={!loading} inline>
                <li>only {pd?.stock} left.!</li>
              </ShimmerLoader>
              <br />
              <ShimmerLoader hidden={!loading} inline>
                <li>
                  <span>ratings : {pd?.rating}</span>
                </li>
              </ShimmerLoader>
              <br />
            </PdDataSection>

            <PriceSection>
              {" "}
              <ShimmerLoader hidden={!loading} inline>
                <strong>
                  <span>{pd?.title}</span>
                </strong>
              </ShimmerLoader>
              <br />
              <ShimmerLoader hidden={!loading} inline>
                <strong>
                  <span>₹{pd?.price}</span>
                </strong>
              </ShimmerLoader>
              <br />
              <ShimmerLoader hidden={!loading} inline>
                <span>{pd?.discountPercentage}% Discount</span>
              </ShimmerLoader>
              <br />
            </PriceSection>
          </CardWrapper>
        ))}
      </Wrapper>
    </React.Fragment>
  );
}
