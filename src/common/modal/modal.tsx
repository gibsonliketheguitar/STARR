import { ReactNode } from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Container = styled(Box)(({ theme }: any) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: theme.primary,
  backgroundColor: theme.palette.neutral[100],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  height: "auto",
  width: theme.spacing(100),
  border: theme.palette.neutral[900],
}));

interface I_ModalProps {
  children: ReactNode[];
  open: boolean;
  handleOnClose: () => void;
  ariaLabel?: string;
  ariaDescribe?: string;
}

export default function MyModal({ ariaDescribe = "", ariaLabel = "", open, handleOnClose, children }: I_ModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleOnClose}
      aria-labelledby={"modal-" + ariaLabel}
      aria-describedby={"modal-" + ariaDescribe}>
      <Container>{children}</Container>
    </Modal>
  );
}
