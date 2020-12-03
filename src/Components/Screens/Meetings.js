import React from "react";
import DateTime from "./DateTime";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 250,
    },
  },
}));

function Meetings() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Title");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div justifyContent="center">
      <h1>Create a meeting</h1>
      <DateTime />

      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <TextField
            id="standard-multiline-flexible"
            label="Title"
            multiline
            rowsMax={2}
            value={value}
            onChange={handleChange}
          />
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Description"
          />
        </div>
      </form>
    </div>
  );
}

export default Meetings;
