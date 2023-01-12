import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  onCloseModal: () => void;
  url: string;
}

export const ConfirmModal = ({ open, onCloseModal, url }: Props) => (
  <div>
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your link for sharing movies
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {url}
        </Typography>
      </Box>
    </Modal>
  </div>
);
