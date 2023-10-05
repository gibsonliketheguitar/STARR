import { Box } from "@mui/material";
import { ReactNode } from "react";

interface I_ContentBodyProps {
    children: ReactNode
}

export function ContentBody(props: I_ContentBodyProps) {
    return (
        <Box margin={12}>
            {props.children}
        </Box>
    )
}
