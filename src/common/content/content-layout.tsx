import { Box } from "@mui/material";
import { ReactNode } from "react";

interface I_ContentLayoutProps {
  children: ReactNode
}

export function ContentLayout(props: I_ContentLayoutProps) {
  <Box display='flex' flexDirection='column' padding={3}>
    {props.children}
  </Box>
}
