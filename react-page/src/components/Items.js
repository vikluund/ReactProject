import React, { useState, useEffect } from "react";
import "bootstrap";
import styled from "styled-components";

function Items() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setOriginalData(data);
      });
  }, []);

  function renderItems() {
    setShowItems(false);
    setTimeout(() => {
      setShowItems(true);
    }, 0);
  }

  function deleteItem(id) {
    setData(data.filter((item) => item.id !== id));
    setShowItems(true);
  }

  function resetItems() {
    setData(originalData);
    setShowItems(false);
    setTimeout(() => {
      setShowItems(true);
    }, 0);
  }

  return (
    <div>
      <Button onClick={renderItems}>Check Out My Work</Button>
      {showItems && (
        <div>
          <Button onClick={resetItems}>Reset Items</Button>
          <CardGroup>
            {data.map((item) => (
              <Card key={item.id}>
                <CardImage src={item.img} alt={item.imgalt} />
                <CardBody>
                  <CardTitle>{item.first}</CardTitle>
                  <CardText>{item.second}</CardText>
                  <DeleteButton onClick={() => deleteItem(item.id)}>
                    Delete
                  </DeleteButton>
                </CardBody>
              </Card>
            ))}
          </CardGroup>
        </div>
      )}
    </div>
  );
}

export default Items;

const buttonColor = "#D53A5B";

const Button = styled.button`
  position: relative;
  padding: 16px 30px;
  margin-top: 10vh;
  margin-bottom: 3vh;
  font-size: 1.5rem;
  color: ${buttonColor};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-shadow: 0 0 15px ${buttonColor};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.2s;
  z-index: 1;

  &:hover {
    color: #fff;
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 0 0 0px ${buttonColor};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${buttonColor};
    z-index: -1;
    transform: scale(0);
    transition: 0.3s;
  }

  &:hover::before {
    transform: scale(1);
    transition-delay: 0.2s;
    box-shadow: 0 0 10px ${buttonColor}, 0 0 30px ${buttonColor},
      0 0 60px ${buttonColor};
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 18rem;
  margin: 16px;
  /* box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2); */
`;

const CardImage = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: contain;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  font-size: 24px;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  position: relative;
  padding: 16px 30px;
  font-size: 1.5rem;
  color: ${buttonColor};
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  text-shadow: 0 0 15px ${buttonColor};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: 0.3s;
  z-index: 1;

  &:hover {
    color: #fff;
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 0 0 0px ${buttonColor};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${buttonColor};
    z-index: -1;
    transform: scale(0);
    transition: 0.3s;
  }

  &:hover::before {
    transform: scale(1);
    transition-delay: 0.3s;
    box-shadow: 0 0 10px ${buttonColor}, 0 0 30px ${buttonColor},
      0 0 60px ${buttonColor};
  }
`;
