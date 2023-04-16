import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <div>
      <Wrap>
        <HeroText>
          <h1>Welcome</h1>
          <h2>To a Portfolio</h2>
        </HeroText>
      </Wrap>
    </div>
  );
}

export default Hero;

const Wrap = styled.div`
  background: url("/media/big-data-g8e3476a48_1920.jpg");
  height: 100vh;
  display: flex;
  background-position: center;
  background-size: cover;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 12vh;
    margin-bottom: 0;
  }
  h2 {
    font-size: 6vh;
  }
`;
