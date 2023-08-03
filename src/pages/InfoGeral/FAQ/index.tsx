import { useState } from "react"
import styled from "@emotion/styled"

import Icon from "./SetaBaixo"

const FaqEstilizado = styled.div`
  cursor: pointer;
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
  background: #2e7ba2;
  text-align: left;
`

const Pergunta = styled.h3`
  margin: 0;
`

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const QuestionWrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const Resposta = styled.p<{ isOpen: boolean }>`
  margin: 0;
  padding: 10px;
  background: ${(props) => (props.isOpen ? "#C8DEEF" : "transparent")};
  text-align: left;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  color: #444444;
`

interface FaqItemProps {
  pergunta: string
  resposta: string
}

export default function FaqItem({ pergunta, resposta }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <FaqEstilizado onClick={toggleAccordion}>
      <QuestionWrapper>
        <Pergunta>{pergunta}</Pergunta>
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </QuestionWrapper>
      <Resposta isOpen={isOpen}>{resposta}</Resposta>
    </FaqEstilizado>
  )
}
