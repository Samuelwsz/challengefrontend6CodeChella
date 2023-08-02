import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import Logo from "../../assets/LogoEscuro.svg"

import Insta from "./assets/insta.svg"
import Twitter from "./assets/twitter.svg"
import Watts from "./assets/watts.svg"
import Twitch from "./assets/twitch.svg"

const Footer = styled.footer`
  background-color: #facf9d;
  padding: 15px;
  overflow-x: hidden;
`

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 8px; /* Adapte a margem conforme necessário */
  }
`

export default function Rodape() {
  return (
    <>
      <Footer>
        <Container>
          <Row align="center" justify="center">
            <Col xs={12} sm={4} md={4} lg={4}>
              <div>
                <img src={Logo} alt="" />
              </div>

              <SocialIcons>
                Acesse nossas redes:
                <img src={Watts} alt="" />
                <img src={Twitch} alt="" />
                <img src={Insta} alt="" />
                <img src={Twitter} alt="" />
              </SocialIcons>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4}></Col>
            <Col xs={12} sm={4} md={4} lg={4}>
              <div style={{ margin: "15px 0 0 0" }}>
                <p>Desenvolvido por Alura.</p>
                <br />
                <p>Projeto fictício sem fins comerciais.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  )
}
