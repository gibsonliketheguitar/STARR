import { useState } from "react";
import Button from "@common/button";
import Modal from "@common/modal";
import { Typography } from "@mui/material";

export function SessionCreateNewButton() {
  const [open, setIsOpen] = useState(false);

  const handleOnOpen = () => setIsOpen(true);
  const handleOnClose = () => setIsOpen(false);

  return (
    <>
      <Button variant="contained" onClick={handleOnOpen}>
        {"Create New"}
      </Button>
      <Modal open={open} handleOnClose={handleOnClose}>
        <Typography variant="h1">{"Create a new session"}</Typography>
        <Typography variant="h2">{"session for target skill"}</Typography>
      </Modal>
    </>
  );
}
