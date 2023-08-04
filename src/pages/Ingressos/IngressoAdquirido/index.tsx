import { Col, Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Banner from "../../../components/Banner"

import BannerIngressoAdquirido from "../../../assets/6 - Banner - seu ingresso está aqui.png"
import LogoEscura from "../../../assets/LogoEscuro.svg"
import IconChellaClaro from "../../../assets/IconChellaClaro.svg"

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`

const ImgLeft = styled.img`
  order: 1; /* Coloca a imagem à esquerda (ordem 1) */
`

const ImgRight = styled.img`
  order: 2; /* Coloca a imagem à direita (ordem 2) */
`

export default function IngressoAdquirido() {
  return (
    <>
      <Banner
        URLimagem={BannerIngressoAdquirido}
        texto="Seu ingresso está aqui!"
      />

      <Container>
        <h3 style={{ textAlign: "center", fontSize: "30px", margin: "30px 0" }}>
          Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
          evento e divirta-se!
        </h3>
        <Row>
          <div>
            <DivHeader>
              <ImgLeft src={LogoEscura} alt="" />
              <ImgRight src={IconChellaClaro} alt="" />
            </DivHeader>
            ;
            <Col>
              <div></div>
            </Col>
            <Col>
              <div></div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  )
}
