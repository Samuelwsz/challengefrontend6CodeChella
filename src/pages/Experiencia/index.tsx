import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import Banner from "../../components/Banner"

import BannerExperiencia from "../../assets/2 - Banner - A Experiência.png"
import AcessibilidadeInclusao from "../../assets/ExpAcessibilidadeInclusao.png"
import Sustentabilidade from "../../assets/ExpSustentabilidade.png"
import Atracoes from "../../assets/ExpAtracoes.png"

const ImgEstilizado = styled.img`
  width: 100%;
`

const TextoContainer = styled.div`
  padding: 20px 0;
  text-align: center;
`

export default function Experiencia() {
  return (
    <>
      <Banner URLimagem={BannerExperiencia} texto="A Experiência" />

      <Container>
        <Row align="center" style={{ padding: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <ImgEstilizado src={AcessibilidadeInclusao} alt="Imagem da home" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3>Acessibilidade e Inclusão</h3>
              <TextoContainer>
                <p style={{ lineHeight: "1.8" }}>
                  Nosso evento tenta abraçar um público mais amplo em todos os
                  sentidos, de todas as idades, corpos, gostos e pensamentos!
                  Isso está presente no espaço físico, na sinalização, no
                  treinamento da equipe de apoio, na comunicação em libras,
                  braile, visual e tátil. Além disso, dispomos de ingressos
                  gratuitos para pessoas com deficiência e acompanhantes,
                  pessoas idosas e crianças!
                </p>
              </TextoContainer>
            </div>
          </Col>
        </Row>

        <Row align="center" style={{ padding: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3>Sustentabilidade</h3>
              <TextoContainer>
                <p style={{ lineHeight: "1.8" }}>
                  Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
                  levamos o futuro do nosso planeta a sério. Nosso festival é
                  carbono zero, com utilização de copos retornáveis, coleta e
                  destinação adequada de resíduos, e transporte coletivo.
                </p>
              </TextoContainer>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <ImgEstilizado src={Sustentabilidade} alt="Imagem da home" />
          </Col>
        </Row>

        <Row align="center" style={{ padding: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <ImgEstilizado src={Atracoes} alt="Imagem da home" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3>Atrações</h3>
              <TextoContainer>
                <p style={{ lineHeight: "1.8" }}>
                  Intervenções artísticas e culturais para todos os gostos!
                  Durante os intervalos dos shows, nossa experiência contará com
                  recreação para crianças, oficina de cerâmica, origami, circo e
                  aquarela! Além disso, nosso espaço contra com 3 praças de
                  alimentação, roda gigante e outros brinquedos!
                </p>
              </TextoContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
