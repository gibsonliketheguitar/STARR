import { Children, createElement, memo, ReactNode } from "react";
import { Control, Controller } from 'react-hook-form'

interface I_FormControllerProps {
  children: ReactNode[] | ReactNode;
  control: Control;
  errors: any
}

function FormControllerBind({ children, control, errors }: I_FormControllerProps): any {
  return Children.map(children, (child: any) => {
    if (child?.props?.children) {
      //recursively step n and link. Kinda like the flattening of nested stuff
      const reactChildren = FormControllerBind({ children: child.props.children, control, errors })
      //handle Layouts
      return createElement(child.type, { ...child.props, children: reactChildren })
    }
    const renderType = child?.type?.render?.name
    if (renderType === 'TextField2') {
      const name = child.props.name
      const errorMessage = errors[name]?.message
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            createElement(child.type, {
              ...field,
              ...child.props,
              error: !!errorMessage,
              helperText: errorMessage,
            })
          )}
        />
      )
    }
    return child
  })
}

export default memo(FormControllerBind)
