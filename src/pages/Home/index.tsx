import styled from "@emotion/styled"
import Banner from "../../components/Banner"
import { Col, Container, Row } from "react-grid-system"

import BannerHome from "../../assets/1 - Banner -Homepage.png"
import HomeImage from "../../assets/HomeImage.png"
import IconBotao from "../../assets/IconeBotao.svg"
import Shows from "./Shows"
import BannerFim from "./BannerDoFim"

const PaginaEstilizada = styled.div`
  background: linear-gradient( #bfdae6 15%, #fcf0dd 50%, #facf9d 100%);
`

const ImgEstilizado = styled.img`
  width: 100%;
`

const BotaoEstilizado = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  margin: auto;
  border: none;
  background-color: #2e7ba2;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 6px 0 0 #2e7ba2;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #2e7ba2;
    box-shadow: 10px 0 0 #2e7ba2;
  }
`

const TextoContainer = styled.div`
  padding: 20px 0;
  text-align: center;
`

export default function Home() {
  return (
    <>
      <PaginaEstilizada>
      
        <Banner
          URLimagem={BannerHome}
          texto="Boas-vindas ao #CodeChella2023!"
        />

        <Container>
          <Row align="center" style={{ padding: "10px" }}>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ImgEstilizado src={HomeImage} alt="Imagem da home" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div style={{ padding: "20px", textAlign: "center" }}>
                <h3>{`< 11 e 12 de março >`}</h3>
                <h3>Aluródromo de São Paulo</h3>
                <TextoContainer>
                  <p style={{ lineHeight: "1.8" }}>
                    Hora de programar nossa memória com novas lembranças! Uma
                    nova experiência sobre música, linguagens e, claro,
                    tecnologia! Somos um festival diverso, com vários artistas e
                    referências. Divirta-se!
                  </p>
                </TextoContainer>
              </div>
              <BotaoEstilizado>
                Comprar Ingresso!
                <img
                  src={IconBotao}
                  style={{ marginLeft: "15px" }}
                  alt="icone botao"
                />
              </BotaoEstilizado>
            </Col>
          </Row>
          <h1 style={{ textAlign: "center", padding: "20px 0" }}>
            / Line-Up /
          </h1>
          <Shows
            tituloprincipal="SÁBADO <11/03>"
            titulo="System of a DOM"
            p1="Python Maiden Apollo Client 2001 Bon Java NickCallback"
            p2="Linkin Promises Fullstack Fighters Papa React Angular in Chains"
            p3="Agnostic Front-end SlipkNode Pink Flutter Kiss"
          />
          <Shows
            tituloprincipal="SÁBADO <11/03>"
            titulo="Lana Del Ploy"
            p1="Dua Lib The Backnd CSS Styles DJ Query ArrayAna Grande"
            p2="Miley Cypress The Bootstrap Boys Json Derulo CloudPlay Dev Lovato"
            p3="Kylie MiLOG Jenkins Brothers Rubycat Dolls"
          />
        </Container>

        <BannerFim />
       
      </PaginaEstilizada>
    </>
  )
}
