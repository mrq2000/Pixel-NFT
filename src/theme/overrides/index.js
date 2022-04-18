import { merge } from 'lodash';
import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';
import Dialog from './Dialog';
import Alert from './Alert';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme, mode) {
  return merge(
    Card(theme, mode),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    Dialog(theme),
    Alert(theme),
  );
}
