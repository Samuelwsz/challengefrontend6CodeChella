import { ChangeEvent, FormEvent } from "react"
import { Col, Container, Row } from "react-grid-system"
import styled from "@emotion/styled"
import Banner from "../../components/Banner"
import Botao from "../../components/Botao"

import BannerIngresso from "../../assets/5 - Banner - garanta seu ingresso.png"
import IconSeta from "./Seta.svg"
import { Link } from "react-router-dom"
import { useFormContext } from "../../Context/ContextIngresso"

const Form = styled.form`
  width: 70%;
  padding: 20px;
  margin: auto;
`

const InputEstilizado = styled.input`
  display: flex;
  padding: 12px;
  width: 100%;
  flex-wrap: wrap;
  outline: none;
  border: none;
`

const SelectEstilizado = styled.select`
  display: flex;
  padding: 12px;
  width: 100%;
  flex-wrap: wrap;
  outline: none;
  border: none;
`

const ParagrafoEstilizado = styled.p`
  text-align: left;
  padding: 5px;
  font-weight: bold;
  font-size: 22px;
`

export default function Ingressos() {
  const { formData, setFormData } = useFormContext()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormData({
      nome: "",
      email: "",
      data: "",
      tipo: "",
    })
  }

  return (
    <>
      <Banner URLimagem={BannerIngresso} texto="Garanta seu Ingresso" />

      <Container
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{ textAlign: "center", fontSize: "34px", marginTop: "30px" }}
        >
          Preencha o formulário a seguir:
        </h1>
        <Form onSubmit={handleSubmit}>
          <Row justify="center" align="center" style={{ marginTop: "30px" }}>
            <Col>
              <ParagrafoEstilizado>Nome Completo:</ParagrafoEstilizado>
              <InputEstilizado
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <ParagrafoEstilizado>Email:</ParagrafoEstilizado>
              <InputEstilizado
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row align="center">
            <Col xs={12} sm={12} md={12} lg={6} style={{ marginTop: "30px" }}>
              <ParagrafoEstilizado>Tipo de ingresso</ParagrafoEstilizado>
              <SelectEstilizado
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Tipo de ingresso</option>
                <option value="ingresso1">Ingresso 1</option>
                <option value="ingresso2">Ingresso 2</option>
                <option value="ingresso3">Ingresso 3</option>
              </SelectEstilizado>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} style={{ marginTop: "30px" }}>
              <ParagrafoEstilizado>Data de nascimento:</ParagrafoEstilizado>
              <InputEstilizado
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <div style={{ margin: "30px 0" }}>
            <Link to="/ingressos/ingressoadquirido">
              <Botao imagem={IconSeta} titulo="Avançar!" tipo="submit" />
            </Link>
          </div>
        </Form>
      </Container>
    </>
  )
}
