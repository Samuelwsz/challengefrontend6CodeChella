import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Experiencia from "../pages/Experiencia"
import PagePadrao from "../pages/PaginaPadrao"
import Setores from "../pages/Setores"
import InfoGeral from "../pages/InfoGeral"
import Ingressos from "../pages/Ingressos"
import IngressoAdquirido from "../pages/Ingressos/IngressoAdquirido"
import { FormProvider } from "../Context/ContextIngresso"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PagePadrao />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/experiencia", element: <Experiencia /> },
      { path: "/setores", element: <Setores /> },
      { path: "/infogeral", element: <InfoGeral /> },

      {
        path: "/ingressos",
        element: (
          <FormProvider>
            <Ingressos />
          </FormProvider>
        ),
      },
      {
        path: "/ingressos/ingressoadquirido",
        element: (
          <FormProvider>
            <IngressoAdquirido />
          </FormProvider>
        ),
      },
    ],
  },
])
/* children: [
          {
            path: "/ingressos/ingressoadquirido",
            element: <IngressoAdquirido />,
          },
        ],*/
