import { Col, Container, Row } from "react-grid-system"
import Banner from "../../components/Banner"

import InfoGeralBanner from "../../assets/4 - Banner - infos gerais.png"
import FaqItem from "./FAQ"

export default function InfoGeral() {
  return (
    <>
      <Banner URLimagem={InfoGeralBanner} texto="Informações Gerais" />

      <Container>
        <h1
          style={{ textAlign: "center", fontSize: "34px", marginTop: "30px" }}
        >
          Perguntas Frequentes:
        </h1>
        <Row align="center" justify="center" style={{ margin: "30px 0" }}>
          <Col>
            <FaqItem
              pergunta="Quais serão as atrações?"
              resposta="Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop."
            />
            <FaqItem
              pergunta="Qual é a classificação etária?"
              resposta="A classificação etária do evento é de 18 anos. Menores de idade não poderão acessar o local do show."
            />
            <FaqItem
              pergunta="Quais são os setores disponíveis?"
              resposta="Pista Premium: Próximo ao palco, acesso privilegiado. Pista Comum: Espaço animado e divertido para curtir o show. Cadeiras Térreo: Assentos confortáveis com ótima visão do palco. Cadeiras Superiores: Assentos com vista panorâmica do espetáculo. Rampas: Área acessível para pessoas com mobilidade reduzida."
            />
            <FaqItem
              pergunta="Quais são os itens proibidos?"
              resposta="Por questões de segurança, alguns itens são proibidos no evento. Não será permitida a entrada com objetos cortantes, armas, drogas ilícitas, bebidas alcoólicas, alimentos e objetos que representem riscos à segurança dos participantes."
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
