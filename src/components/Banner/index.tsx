import styled from "@emotion/styled"

const BannerContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 100%;
`

const BannerImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  object-fit: cover;
`
/*  width: 2000px;
  height: 400px;*/
const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 24px;
  text-align: center;
  padding: 20px;
`

interface BannerProps {
  URLimagem: string
  texto: string
}

export default function Banner({ URLimagem, texto }: BannerProps) {
  return (
    <BannerContainer>
      <BannerImage src={URLimagem} alt="Banner Image" />
      <BannerText>
        <h1>{texto}</h1>
      </BannerText>
    </BannerContainer>
  )
}
