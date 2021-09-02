import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { alpha } from '@material-ui/core/styles'

export default function DatePicker({handleDateChange, selectedDate}) {
    return <MuiPickersUtilsProvider utils={DateFnsUtils}>
<KeyboardDatePicker
margin="normal"
id="date-picker-dialog"
format="dd/MM/yyyy"
value={selectedDate}
onChange={handleDateChange}
KeyboardButtonProps={{
  'aria-label': 'change date',
}}
/>
</MuiPickersUtilsProvider>
}