import { Box, Typography } from "@mui/material";

interface I_ContentHeaderProps {
  title: string
  description: string
}

export function ContentHeader({ title, description }: I_ContentHeaderProps) {
  return (
    <Box>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant="h2">{description}</Typography>
    </Box>
  )
}
