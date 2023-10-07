import { Children, createElement, ReactNode } from "react";
import { Control, Controller } from 'react-hook-form'

interface I_FormControllerProps {
  children: ReactNode[] | ReactNode;
  control: Control;
}

export function FormControllerBind({ children, control }: I_FormControllerProps): any {
  return Children.map(children, (child: any) => {
    if (child?.props?.children) {
      //recursively step n and link. Kinda like the flattening of nested stuff
      const reactChildren = FormControllerBind({ children: child.props.children, control })
      //handle Layouts
      return createElement(child.type, { ...child.props, children: reactChildren })
    }
    if(child?.type?.render?.name === 'TextField2') {
      return (
        <Controller
          name={child.props.name}
          control={control}
          defaultValue=""
          //TODO rules={{}}
          render={({ field, fieldState }) => (
            createElement(child.type, {
              ...field,
              ...child.props,
              error: !!fieldState.error,
              helperText: fieldState.error ? fieldState.error.message : null,
            })
          )}
        />)
    }
    return child
  })
}
