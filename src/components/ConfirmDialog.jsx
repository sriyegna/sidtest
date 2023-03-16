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
    trail
  } = props
  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    note: "",
  });
  
  const complete = () => {
    instance.post('addRun')
    //uuid
    dispatch(isCompleted(trail.name))
    setClickedTrailName('')
  }

  return (
    <Dialog open={clickedTrailName} onClose={() => setClickedTrailName(false)}>
      <Typography gutterBottom variant="h4" align="center">
        You have completed
        {trail.name}
        {trail.difficulty}
        {/*  */}
      </Typography>
      <Button onClick={() => complete()}>
        Completed
      </Button>
    </Dialog>
  );
};

export default ConfirmDialog;
