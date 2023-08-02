import styled from "@emotion/styled"

import BannerImagemFim from "./Imagem.png"

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

export default function BannerFim() {
  return (
    <>
      <BannerContainer>
        <BannerImage src={BannerImagemFim} alt="imagem fim" />
      </BannerContainer>
    </>
  )
}
