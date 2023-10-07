import { Children, ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from 'react-hook-form'
import FormControllerBind from "./form-controller-bind.tsx";

interface I_FormProps {
  children: ReactNode[] | ReactNode;
  onSubmit: (val: any) => void;
  schema: any;
}

const MyForm = ({ children, onSubmit, schema }: I_FormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        return <FormControllerBind children={child} control={control} errors={errors}/>
      })}
    </form>
  )
}

export default MyForm

