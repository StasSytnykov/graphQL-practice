import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { Form, Field } from "react-final-form";
import { Values } from "../SelectedMovies";
import { formValidation } from "./formValidation";

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
                  placeholder="Confirm Movie"
                  inputProps={{ "aria-label": "confirm movie" }}
                  {...input}
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </>
            )}
          />

          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <CheckIcon />
          </IconButton>
        </Paper>
      </form>
    )}
  />
);
