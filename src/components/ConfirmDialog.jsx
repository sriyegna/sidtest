import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  isCompleted,
  selectTrails
} from '../features/trailsSlice';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Select,
  MenuItem,
  Typography,
  Grid,
  Card,
  InputLabel,
  FormControl
} from "@mui/material";
import instance from '../utils/axios'

const ConfirmDialog = (props) => {
  const dispatch = useDispatch();
  const {
    clickedTrailName,
    setClickedTrailName,
    setTrailCompleted,
    trail
  } = props
  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    note: "",
  });

  return (
    <Dialog open={clickedTrailName} onClose={() => setClickedTrailName(false)}>
      <Grid m={2} justifyContent="center" alignItems="center">
        <Typography variant="h4" align="center">
          {trail.name}
        </Typography>
        <Typography variant="h4" align="center">
          {trail.difficulty}
        </Typography>

      </Grid>
      <Button onClick={() => setTrailCompleted(trail.name)}>
        Completed
      </Button>
    </Dialog>
  );
};

export default ConfirmDialog;
