import React from "react";

import GasSvg from "../../assets/gas.svg";

import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from "./styles";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props) {
  return (
    <Container>
      <Details>
        <Brand> {data.brand} </Brand>
        <Name> {data.name} </Name>

        <About>
          <Rent>
            <Period> {data.rent.period} </Period>
            <Price> {`R$ ${data.rent.price}`} </Price>
          </Rent>

          <Type>
            <GasSvg />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
