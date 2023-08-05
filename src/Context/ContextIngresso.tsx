import { createContext, useContext, useState, ReactNode } from "react"

interface FormData {
  nome: string
  email: string
  data: string
  tipo: string
}

interface FormContextData {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

const FormContext = createContext<FormContextData | undefined>(undefined)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

interface FormProviderProps {
  children: ReactNode
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    data: "",
    tipo: "",
  })

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}
