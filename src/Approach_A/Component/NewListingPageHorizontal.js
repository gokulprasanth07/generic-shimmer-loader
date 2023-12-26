import * as React from "react";
import ShimmerLoader from "../ShimmerLoader/ShimmerLoader";
import styled from "@emotion/styled";

export default function NewListingPageHorizontal() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data?.products?.length) {
          setData(data.products.slice(0, 12));
        }
      });

    setTimeout(() => setLoading(false), 4000);
  }, []);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    padding: 36px;
    justify-content: center;
  `;
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

  return (
    <React.Fragment>
      <Wrapper>
        {data.map((pd) => (
          <div
            style={{
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardWrapper>
              <div style={{ width: 360, padding: "12px" }}>
                <ShimmerLoader hidden={!loading}>
                    <Image
                      src={pd?.images[0]}
                      alt=""
                      width={320}
                      height={240}
                    />
                </ShimmerLoader>
                <div style={{ width: "220px", padding: "12px" }}>
                  {" "}
                  <ShimmerLoader hidden={!loading} inline>
                    <h2>{pd?.title}</h2>
                  </ShimmerLoader>
                </div>
                <LineContent>
                  <ShimmerLoader hidden={!loading} inline>
                    {pd?.description}
                  </ShimmerLoader>
                </LineContent>
              </div>
            </CardWrapper>
          </div>
        ))}
      </Wrapper>
    </React.Fragment>
  );
}

// export default NewListingPage;
