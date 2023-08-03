import Banner from "../../components/Banner"

import BannerIngresso from "../../assets/5 - Banner - garanta seu ingresso.png"
import { Col, Container, Row } from "react-grid-system"

export default function Ingressos() {
  return (
    <>
      <Banner URLimagem={BannerIngresso} texto="Garanta seu Ingresso" />

      <Container>
        <h1
          style={{ textAlign: "center", fontSize: "34px", marginTop: "30px" }}
        >
          Preencha o formulário a seguir:
        </h1>
        <Row style={{ marginTop: "30px" }}>
          <Col>nome</Col>
        </Row>
        <Row style={{ marginTop: "30px" }}> 
          <Col>email</Col>
        </Row>
        <Row>
          <Col>tipo</Col>
          <Col>data</Col>
        </Row>
      </Container>
    </>
  )
}
