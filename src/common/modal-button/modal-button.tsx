import { useState } from "react";
import Button from "@common/button";
import Modal from "@common/modal"
import { Typography } from "@mui/material";


interface I_ModalButtonProps {
  title: string
  description: string
}

export function ModalButton({ title, description }: I_ModalButtonProps) {
  const [open, setIsOpen] = useState(false)

  const handleOnOpen = () => setIsOpen(true)
  const handleOnClose = () => setIsOpen(false)

  return (
    <>
      <Button variant='contained' onClick={handleOnOpen}>{title}</Button>
      <Modal open={open} handleOnClose={handleOnClose}>
        <Typography variant='h1'>{title}</Typography>
        <Typography variant='h2'>{description}</Typography>
      </Modal>
    </>
  )
}
