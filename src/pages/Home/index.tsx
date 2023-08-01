import Banner from "../../components/Banner"
import Cabecalho from "../../components/Cabecalho"
import BannerHome from "../../assets/1 - Banner -Homepage.png"
import Rodape from "../../components/Rodape"

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Banner URLimagem={BannerHome} texto="Boas-vindas ao #CodeChella2023!" />
      <Rodape />
    </>
  )
}
