import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
function DateTime() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-11-11T12:00")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container diretion="row" justify="space-evenly">
        <KeyboardDatePicker
          placeholder="MM/DD/YYYY"
          margin="normal"
          format="MM/dd/yyyy"
          variant="inline"
          id="date-picker"
          label="Slot date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />

        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DateTime;
