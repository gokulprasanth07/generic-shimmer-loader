import React from "react";
import styled from "@emotion/styled";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: #f2f2f2;
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) => (props.isToggled ? "maroon" : "gray")};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isToggled ? "translateX(28px)" : "translateX(0px"};
`;

const Toggle = ({ loading, setLoading }) => {
  const handleToggle = () => {
    setLoading(!loading);
  };

  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleCircle isToggled={loading} />
    </ToggleContainer>
  );
};

export default Toggle;
