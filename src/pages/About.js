import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png">
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Hi ! My name is Thanh</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I came from a small town located in south-east of Vietnam and I migrated to the United State in 7th grade with my family. Because of the language barrier, video games is my only escape at the time. Like most people, I play a lot of video games in my middle and high school years. What different is that I am a very competitive gamer, I would spent hours trying to be the top players, but the games that I used to play was very time consuming so I wanted to find a way to do more for less. Then I discovered Autohotkey (a scripting language that let you manipulate keystrokes and mouse) and I started making tools to boost my gaming experience and share it to other players. Since that day, I dedicated my time to make more tools for not just gaming, but also tools to helps with my daily tasks.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
