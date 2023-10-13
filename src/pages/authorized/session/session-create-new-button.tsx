import { useState } from "react";
import { z } from "zod";
import Button from "@common/button";
import Modal from "@common/modal";
import { Box, TextField, Typography, styled } from "@mui/material";
import Form from "@common/form";
import { T_SessionAction, useSessionStore } from "./session-store";

const newSessionSchema = z.object({
  topic: z.any(),
  skill: z.any(),
  content: z.any(),
});

export function SessionCreateNewButton() {
  const [open, setIsOpen] = useState(false);
  const create = useSessionStore((state: T_SessionAction) => state.create);

  const handleOnOpen = () => setIsOpen(true);
  const handleOnClose = () => setIsOpen(false);

  const handleOnSubmit = async (data: any) => {
    create(data);
    handleOnClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOnOpen}>
        {"Create New"}
      </Button>
      <Modal open={open} handleOnClose={handleOnClose}>
        <Typography variant="h1">{"Create a new session"}</Typography>
        <Typography variant="h2">{"session for target skill"}</Typography>
        <Form onSubmit={handleOnSubmit} schema={newSessionSchema}>
          <Layout>
            <TextField name="topic" label="topic" variant="outlined" />
            <TextField name="skill" label="skill" variant="outlined" />
            <TextField name="content" label="content" variant="outlined" />
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Layout>
        </Form>
      </Modal>
    </>
  );
}

const Layout = styled(Box)(({ theme }: any) => ({
  display: "grid",
  color: theme.primary,
  backgroundColor: theme.palette.neutral[100],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  height: "auto",
}));
