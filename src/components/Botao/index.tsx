import styled from "@emotion/styled"

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

  box-shadow: 5px 5px 1px -1px rgba(0, 0, 0, 0.75);
`

const ImagemEstilizada = styled.img`
  margin-left: 15px;
`

interface BotaoProps {
  titulo: string
  imagem: string
  tipo?: "button" | "submit" | "reset"
}

export default function Botao({ titulo, imagem, tipo = "button" }: BotaoProps) {
  return (
    <>
      <BotaoEstilizado type={tipo}>
        {titulo}
        <ImagemEstilizada src={imagem} />
      </BotaoEstilizado>
    </>
  )
}
