import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasSvg from '../../assets/gas.svg'
import TransmissionSvg from '../../assets/transmission.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";
import { Button } from "../../components/Button";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_34841515342559092.webp?s=fill&w=236&h=135&q=70&t=true",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

          <Accessories>
            <Accessory name="380Km/h" icon={SpeedSvg} />
            <Accessory name="3.2s" icon={AccelerationSvg} />
            <Accessory name="800 HP" icon={ForceSvg} />
            <Accessory name="Gasolina" icon={GasSvg} />
            <Accessory name="Auto" icon={TransmissionSvg} />
            <Accessory name="2 pessoas" icon={PeopleSvg} />
          </Accessories>

        <About>
          The Lamborghini Huracán is the perfect fusion of technology and design.
          With its crisp, streamlined lines, designed to cut through the air and
          tame the road, you’ll get a thrill just by looking at it. The only
          thing better than taking in this beauty from a distance is actually
          touching it.
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" color="" />
      </Footer>
    </Container>
  );
}
