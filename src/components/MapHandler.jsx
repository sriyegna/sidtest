import { useCallback, useState, useEffect } from "react";
import { useMapEvent } from "react-leaflet/hooks";
import { Polyline } from "react-leaflet";
import blueMountain from './blue-mountain.json'
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  isCompleted,
  selectTrails
} from '../features/trailsSlice';
import TrailDialog from "./TrailDialog";
import ConfirmDialog from "./ConfirmDialog";
import { selectUser } from "../features/userSlice";
import instance from "../utils/axios";


const MapHandler = () => {
  const blueMountainTrails = useSelector(selectTrails)
  const mountainName = blueMountainTrails.name
  const isLoggedIn = useSelector(selectUser)
  const dispatch = useDispatch();
  const [clickedTrailName, setClickedTrailName] = useState('');
  const [trailDialogOpen, setTrailDialogOpen] = useState('');
  // console.log('bmtrail', blueMountainTrails)

  const onDoubleClick = useCallback(
    (e) => {
      console.log([e.latlng.lat, e.latlng.lng])
    },
    []
  );

  const setTrailCompleted = (trailName) => {
    console.log('add run', trailName)

    instance.post('addRun', {
      //userID : token
      mountainName,
      trailName,
      runCounter: 1,
      //date
    })
      .then(res => {
        dispatch(isCompleted(trailName))
        setClickedTrailName('')
      })
      .catch(err => {
        console.log(err);
      })
  }

  const setTrailIncomplete = (trailName) => {
    console.log('remove run', trailName)
    instance.post('deleteRun', {
      // userID: cookies.get('token'),
    })

    dispatch(isCompleted(trailName))
    setTrailDialogOpen('')
  }

  useMapEvent("click", onDoubleClick);

  return (
    <>
      {Object.values(blueMountain.trails).map((trail, id) => {
        // console.log('name', trail.name)        
        // console.log('obj', Object.values(blueMountain.trails))
        // console.log('state', blueMountainTrails)
        // console.log('bm', blueMountainTrails.trails[trail.name])
        // console.log('trail', trail)

        return (
          <>
            <Polyline
              key={id}
              positions={trail.positions}
              pathOptions={{
                color: 'purple',
                weight: 15,
                opacity: blueMountainTrails.trails[trail.name].isCompleted ? 0.5 : 0
              }}
              eventHandlers={{
                click: () => {
                  console.log(trail)
                  if (!blueMountainTrails.trails[trail.name].isCompleted) {
                    setClickedTrailName(trail.name)

                    // axios function

                    //   // open dialog with trail details and confirm button
                    // dispatch(isCompleted(trail.name))
                  }

                  if (blueMountainTrails.trails[trail.name].isCompleted) {
                    setTrailDialogOpen(trail.name);
                  }
                },
              }}
            />
            <ConfirmDialog
              clickedTrailName={trail.name === clickedTrailName}
              setClickedTrailName={setClickedTrailName}
              setTrailCompleted={setTrailCompleted}
              trail={trail}
            />
            <TrailDialog
              trailDialogOpen={trail.name === trailDialogOpen}
              setTrailDialogOpen={setTrailDialogOpen}
              setTrailIncomplete={setTrailIncomplete}
              trail={trail}
              runCounter={blueMountainTrails.trails[trail.name].runCounter}
            />
          </>
        )
      }
      )}
    </>
  )
}

export default MapHandler
