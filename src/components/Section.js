import React from "react";
import styled from "styled-components";
import Wave from "./Wave";

const SectionGroup = styled.div`
  background: url(${(props) => props.image});
  height: 780px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  padding: 40px 0 24px 0;

  @media (max-width: 800px) {
    height: 900px;
  }
`;

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`;
const SectionTitleGroup = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 auto;
  padding: 0 40px;
  column-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.6;
  @media (max-width: 720px) {
    text-align: center;
    font-size: 50px;
  }
`;
const SectionText = styled.p`
  color: white;
`;

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -10px;
`;

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -16px;
  transform: rotate(180deg);
`;

const Section = (props) => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <Wave />
    </WaveTop>
    <WaveBottom>
      <Wave />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText> {props.text} </SectionText>
    </SectionTitleGroup>
  </SectionGroup>
);

export default Section;
