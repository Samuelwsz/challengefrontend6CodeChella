import styled from "@emotion/styled"
import Banner from "../../components/Banner"
import { Col, Container, Row } from "react-grid-system"

import BannerHome from "../../assets/1 - Banner -Homepage.png"
import HomeImage from "../../assets/HomeImage.png"
import IconBotao from "../../assets/IconeBotao.svg"
import Shows from "./Shows"
import BannerFim from "./BannerDoFim"
import Botao from "../../components/Botao"

const ImgEstilizado = styled.img`
  width: 100%;
`

const TextoContainer = styled.div`
  padding: 20px 0;
  text-align: center;
`

export default function Home() {
  const BandasSabado1 = [
    { texto: "Python Maiden" },
    { texto: "Apollo Client 2001" },
    { texto: "Bon Java" },
    { texto: "NickCallback" },
  ]

  const BandasSabado2 = [
    { texto: "Linkin Promises" },
    { texto: "Fullstack Fighters" },
    { texto: "Papa React" },
    { texto: "Angular in Chains" },
  ]

  const BandasSabado3 = [
    { texto: "Agnostic Front-end" },
    { texto: "SlipkNode" },
    { texto: "Pink Flutter" },
    { texto: "Kiss" },
  ]

  const BandasDomingo1 = [
    { texto: "Dua Lib" },
    { texto: "The Backnd" },
    { texto: "CSS Styles" },
    { texto: "DJ Query" },
    { texto: "ArrayAna Grande" },
  ]
  const BandasDomingo2 = [
    { texto: "Miley Cypress" },
    { texto: "The Bootstrap Boys" },
    { texto: "Json Derulo" },
    { texto: "CloudPlay" },
    { texto: "Dev Lovato" },
  ]
  const BandasDomingo3 = [
    { texto: "Kylie MiLOG" },
    { texto: "Jenkins Brothers" },
    { texto: "Rubycat Dolls" },
  ]
  return (
    <>
      <Banner URLimagem={BannerHome} texto="Boas-vindas ao #CodeChella2023!" />

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
                  Hora de programar nossa memória com novas lembranças! Uma nova
                  experiência sobre música, linguagens e, claro, tecnologia!
                  Somos um festival diverso, com vários artistas e referências.
                  Divirta-se!
                </p>
              </TextoContainer>
            </div>
            <Botao imagem={IconBotao} titulo="  Comprar Ingresso!" />
          </Col>
        </Row>
        <h1
          style={{ textAlign: "center", padding: "20px 0", fontSize: "36px" }}
        >
          / Line-Up /
        </h1>
        <Shows
          tituloprincipal="SÁBADO <11/03>"
          titulo="System of a DOM"
          p1={BandasSabado1.map((banda) => banda.texto).join(" ")}
          p2={BandasSabado2.map((banda) => banda.texto).join(" ")}
          p3={BandasSabado3.map((banda) => banda.texto).join(" ")}
        />
        <Shows
          tituloprincipal="DOMINGO <12/03>"
          titulo="Lana Del Ploy"
          p1={BandasDomingo1.map((banda) => banda.texto).join(" ")}
          p2={BandasDomingo2.map((banda) => banda.texto).join(" ")}
          p3={BandasDomingo3.map((banda) => banda.texto).join(" ")}
        />
      </Container>

      <BannerFim />
    </>
  )
}
