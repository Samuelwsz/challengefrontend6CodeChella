import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Experiencia from "../pages/Experiencia"
import PagePadrao from "../pages/PaginaPadrao"
import Setores from "../pages/Setores"
import InfoGeral from "../pages/InfoGeral"
import Ingressos from "../pages/Ingressos"
import IngressoAdquirido from "../pages/Ingressos/IngressoAdquirido"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PagePadrao />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/experiencia", element: <Experiencia /> },
      { path: "/setores", element: <Setores /> },
      { path: "/infogeral", element: <InfoGeral /> },
      { path: "/ingressos", element: <Ingressos /> },
      { path: "/ingressos/ingressoadquirido", element: <IngressoAdquirido /> },
    ],
  },
])
/* children: [
          {
            path: "/ingressos/ingressoadquirido",
            element: <IngressoAdquirido />,
          },
        ],*/
