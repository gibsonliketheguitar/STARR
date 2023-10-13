import { ContentBody, ContentHeader } from "@common/content";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { SessionCreateNewButton } from "./session-create-new-button";
import { T_SessionState, useSessionStore } from "./session-store";

export function Session() {
  const sessions = useSessionStore((state: T_SessionState) => state.sessions);
  console.log(sessions);
  return (
    <Box display="flex" flexDirection="column" padding={3}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end" pb={2}>
        <ContentHeader title="Session" description="Review last sessions" />
        <SessionCreateNewButton />
      </Box>
      <Divider />
      <ContentBody>
        <div>Hello</div>
        {sessions.map((ele: any, idx: number) => (
          <div key={idx}>
            {ele.topic} {idx}
          </div>
        ))}
      </ContentBody>
    </Box>
  );
}
