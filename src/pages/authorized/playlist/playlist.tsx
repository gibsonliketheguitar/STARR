import { ContentBody, ContentHeader } from "@common/content";
import { ModalButton } from "@common/modal-button/modal-button";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";

export function Playlist() {
  return (
    <Box display='flex' flexDirection='column' padding={3}>
      <Box display='flex' justifyContent="space-between" alignItems='flex-end' pb={2}>
        <ContentHeader title='playlist' description="Review last sessions" />
        <ModalButton title='start new' description="create a new session" />
      </Box>
      <Divider/>
      <ContentBody>
        <div>Hello World</div>
      </ContentBody>
    </Box>
  )
}
