import React, { useState, useContext } from "react";
import MoneyMaker from "./Increaser";
import styled from "styled-components";

type CoinProps = {
  buttonCoinSrc: string,
};

function Coin(props: CoinProps) {
  const [count, setCount] = useState(0);
  const moneyMaker = useContext(MoneyMaker);

  function moneyClick() {
    setCount(count + moneyMaker.incrementBy);
  }

  return (
    <CoinWrapper>
      <CoinTitle>The only "about" here is increasing your wealth.</CoinTitle>
      <CoinImage
        src={props.buttonCoinSrc}
        alt="Button Coin"
        onClick={moneyClick}
      />
      <CountLabel count={count}>{count}</CountLabel>
    </CoinWrapper>
  );
}

export default Coin;

const CoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoinTitle = styled.h1`
  font-size: 5rem;
  margin-top: 5vh;
`;

const CoinImage = styled.img`
  height: 50vh;
  margin-top: 8vh;
  cursor: pointer;
  &:active {
    transform: translateY(3px);
  }
`;

const CountLabel = styled.p<{ count: number }>`
  margin-top: 0.5rem;
  font-size: 5rem;
  color: ${(props) => (props.count > 4 ? 'gold' : 'white')};
`;
