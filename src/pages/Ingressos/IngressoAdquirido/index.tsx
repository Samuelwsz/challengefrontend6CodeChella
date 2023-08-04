import { Col, Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Banner from "../../../components/Banner"

import BannerIngressoAdquirido from "../../../assets/6 - Banner - seu ingresso está aqui.png"
import LogoEscura from "../../../assets/LogoEscuro.svg"
import IconChellaClaro from "../../../assets/IconChellaClaro.svg"
import QrCode from "../../../assets/Qr code 1.png"

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ContainerCentralizado = styled(Container)`
  text-align: center;
  height: auto;
  width: 60%;
  padding: 10px;
  margin-bottom: 30px;
  background: linear-gradient(#bfdae6 15%, #fcf0dd 50%, #facf9d 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const DivConteudo = styled.div`
  line-height: 2;
  text-align: ;
`

export default function IngressoAdquirido() {
  return (
    <>
      <Banner
        URLimagem={BannerIngressoAdquirido}
        texto="Seu ingresso está aqui!"
      />

      <h3
        style={{
          textAlign: "center",
          fontSize: "24px",
          margin: "30px 0",
        }}
      >
        Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento
        e divirta-se!
      </h3>

      <ContainerCentralizado>
        <DivHeader>
          <img src={LogoEscura} alt="" />
          <img src={IconChellaClaro} alt="" />
        </DivHeader>
        <Row align="center" justify="center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <img src={QrCode} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3
              style={{
                fontWeight: "bold",
                lineHeight: "4",
                marginTop: "-40px",
              }}
            >
              Nome
            </h3>
            <DivConteudo>
              <p>a</p>
              <p>a</p>
              <p>a</p>
              <p>a</p>
            </DivConteudo>
          </Col>
        </Row>
      </ContainerCentralizado>
    </>
  )
}
