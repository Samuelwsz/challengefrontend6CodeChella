import styled from "@emotion/styled"
import { Col, Container, Row } from "react-grid-system"
import { Link } from "react-router-dom"

import logo from "../../assets/logoClaro.svg"

const Header = styled.header`
  background: black;
  color: white;
  overflow-x: hidden;
  padding: 10px;
  background-color: #2e7ba2;
`

const ListaMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  color: white;
  align-items: center; /* Alinhar os itens verticalmente */
`

const ParagrafoEstilizado = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`

export default function Cabecalho() {
  return (
    <>
      <Header>
        <Container>
          <Row align="center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <img src={logo} alt="" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ListaMenu>
                <li>
                  <Link
                    to="/experiencia"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    A experiência
                  </Link>
                </li>

                <li>
                  <Link
                    to="/setores"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Mapa de Setores
                  </Link>
                </li>
                <li>
                  <Link
                    to="/info"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Informações
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ingresso"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Ingresso
                  </Link>
                </li>
              </ListaMenu>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  )
}