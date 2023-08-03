import styled from "@emotion/styled"
import { Col } from "react-grid-system"

const TextoCentralizado = styled.div`
  text-align: center;
  line-height: 2.4;
  margin-bottom: 20px;
`

const TituloBackground = styled.div`
  background-color: #df9010;
  border-radius: 8px;
  padding: 2px 2px;
  width: 40%;
  margin: auto;
`

interface ShowsProps {
  tituloprincipal: string
  titulo: string
  p1: string
  p2: string
  p3: string
}

export default function Shows({
  tituloprincipal,
  titulo,
  p1,
  p2,
  p3,
}: ShowsProps) {
  return (
    <>
      <TextoCentralizado>
        <Col>
          <TituloBackground>
            <h1 style={{ color: "white" }}>{tituloprincipal}</h1>
          </TituloBackground>
          <h1 style={{ fontSize: "35px" }}>{titulo}</h1>

          <p style={{ fontSize: "30px", fontWeight: "bold" }}>{p1}</p>
          <p style={{ fontSize: "23px", fontWeight: "bold" }}>{p2}</p>
          <p style={{ fontSize: "19px" }}>{p3}</p>
        </Col>
      </TextoCentralizado>
    </>
  )
}
