import { Children, ReactNode } from "react";
import { useForm } from 'react-hook-form'
import { FormControllerBind } from "./form-controller-bind.tsx";

interface I_FormProps {
  children: ReactNode[] | ReactNode
  onSubmit: (val: any) => void
}

const MyForm = ({ children, onSubmit }: I_FormProps) => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child: any) => {
        return FormControllerBind({ children: child, control})
      })}
    </form>
  )
}

export default MyForm

