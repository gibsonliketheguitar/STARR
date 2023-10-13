import { ContentBody, ContentHeader } from "@common/content";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { SessionCreateNewButton } from "./session-create-new-button";

export function Session() {
  return (
    <Box display="flex" flexDirection="column" padding={3}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end" pb={2}>
        <ContentHeader title="Session" description="Review last sessions" />
        <SessionCreateNewButton />
      </Box>
      <Divider />
      <ContentBody>
        <div>Hello World</div>
      </ContentBody>
    </Box>
  );
}
