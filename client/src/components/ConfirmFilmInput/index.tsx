import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import { Form, Field } from "react-final-form";
import { Values } from "../SelectedMovies";
import { formValidation } from "./formValidation";
import { red } from "@mui/material/colors";

interface Props {
  onSubmit: (values: Values) => void;
}

export const ConfirmFilmInput = ({ onSubmit }: Props) => (
  <Form
    onSubmit={onSubmit}
    validate={formValidation.validateForm}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Field
            name="listName"
            render={({ input, meta }) => (
              <>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Name your movies list"
                  inputProps={{ "aria-label": "Sharing movies" }}
                  {...input}
                />
                {meta.error && meta.touched && (
                  <Typography variant="caption" sx={{ color: red[500] }}>
                    {meta.error}
                  </Typography>
                )}
              </>
            )}
          />

          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <ShareIcon color="primary" />
          </IconButton>
        </Paper>
      </form>
    )}
  />
);
