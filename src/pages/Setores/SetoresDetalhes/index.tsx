import styled from "@emotion/styled"
import { Col } from "react-grid-system"

const TextoContainer = styled.div`
  padding: 20px 0;
  text-align: center;
`

const ImgEstilizado = styled.img`
  width: 100%;
`

interface SetoresDetalhesProps {
  imagem: string
  titulo: string
  texto: string
}

export default function SetoresDetalhes({
  imagem,
  titulo,
  texto,
}: SetoresDetalhesProps) {
  return (
    <>
      <Col xs={12} sm={12} md={6} lg={4}>
        <ImgEstilizado src={imagem} />
        <TextoContainer>
          <h3 style={{ marginBottom: "10px" }}>{titulo}</h3>
          <p style={{ lineHeight: "1.8" }}>{texto}</p>
        </TextoContainer>
      </Col>
    </>
  )
}
