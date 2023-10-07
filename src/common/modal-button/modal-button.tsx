import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@common/button";
import Modal from '@mui/material/Modal'
import Typography from "@mui/material/Typography";


interface I_ModalButtonProps {
  title: string
  description: string
}

export function ModalButton({ title, description }: I_ModalButtonProps) {
  const [open, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <Button variant='contained' onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={"modal-" + title}
        aria-describedby={"modal-" + description}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};