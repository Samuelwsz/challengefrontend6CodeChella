import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"

import SetoresDetalhes from "./SetoresDetalhes"

import Banner from "../../components/Banner"
import SetoresBanner from "../../assets/3 - Banner - Mapa de setores.png"
import SetoresDetalhesImg from "../../assets/Mapa setores detalhado.png"
import DetalhesPista from "../../assets/DetalhesPista.png"
import DetalhesPistaPremium from "../../assets/DetalhesPistaPremium.png"
import DetalhesCadeiras from "../../assets/DetalhesCadeiras.png"

const ImgEstilizado = styled.img`
  width: 100%;
`

const TextoContainer = styled.div`
  padding: 10px 0;
  text-align: left;
  display: flex;
  align-items: center;
`

const LegendaEstilizada = styled.span<LegendaProps>`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 3px;
  background-color: ${(props) => props.cor};
`

interface LegendaProps {
  cor: string
}

export default function Setores() {
  const legendasDetalhes = [
    {
      texto: "Pista Premium",
      cor: "#0E7DF1",
    },
    {
      texto: "Pista Comum",
      cor: "#FE016E",
    },
    {
      texto: "Cadeiras térreo",
      cor: "#01A89E",
    },
    {
      texto: "Cadeiras superiores",
      cor: "#3F51B5",
    },
    {
      texto: "Rampas",
      cor: "#0E7DF1",
    },
  ]

  return (
    <>
      <Banner URLimagem={SetoresBanner} texto="Mapa de Setores" />

      <Container>
        <Row align="center" style={{ padding: "10px" }}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <ImgEstilizado src={SetoresDetalhesImg} alt="Imagem da home" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{ padding: "20px", textAlign: "left" }}>
              <h3 style={{ fontSize: "22px" }}>Legenda:</h3>
              {legendasDetalhes.map((legenda, index) => (
                <TextoContainer key={index}>
                  <LegendaEstilizada cor={legenda.cor} />
                  <span
                    style={{
                      lineHeight: "1.8",
                      fontSize: "18px",
                    }}
                  >
                    {legenda.texto}
                  </span>
                </TextoContainer>
              ))}
            </div>
          </Col>
        </Row>
        <h3 style={{ fontSize: "30px", textAlign: "center", margin: "28px 0" }}>
          Mais detalhes sobre os setores:
        </h3>
        <Row justify="center">
          <SetoresDetalhes
            imagem={DetalhesPista}
            titulo="Pista"
            texto="Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."
          />
          <SetoresDetalhes
            imagem={DetalhesPistaPremium}
            titulo="Pista Premium"
            texto="Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."
          />
          <SetoresDetalhes
            imagem={DetalhesCadeiras}
            titulo="Cadeiras"
            texto="Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."
          />
        </Row>
      </Container>
    </>
  )
}
