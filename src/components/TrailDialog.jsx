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
import { Cookies } from 'react-cookie'


const TrailDialog = (props) => {
  const dispatch = useDispatch();
  const {
    trailDialogOpen,
    setTrailDialogOpen,
    setTrailIncomplete,
    trail
  } = props
  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    note: "",
  });

  //pull counter from redux using trail name

  return (
    <Dialog open={trailDialogOpen} onClose={() => setTrailDialogOpen('')}>
      <Grid m={2} justifyContent="center" alignItems="center">
        <Typography variant="h4" align="center">
          {trail.name}
        </Typography>
        <Typography variant="h4" align="center">
          {trail.difficulty}
        </Typography>
      </Grid>
      <Button onClick={() => {
        setTrailIncomplete(trail.name)
        console.log(Cookies.get('token'))
      }}>
        Not Completed
      </Button>
    </Dialog>
  );
};

export default TrailDialog;
