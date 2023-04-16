import React from 'react'
import MoneyMaker from '../components/Increaser';
import Coin from '../components/Coin';

function About(): JSX.Element {

  const moneyValue = { incrementBy: 1};

  return (
    <MoneyMaker.Provider value={moneyValue}>
      <Coin buttonCoinSrc="/media/Coin.png"/>
    </MoneyMaker.Provider>
  )
}

export default About
