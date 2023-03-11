import { useCallback, useEffect, useState } from "react";
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

const MapHandler = () => {
  const blueMountainTrails = useSelector(selectTrails)
  const dispatch = useDispatch();
  // console.log('bmtrail', blueMountainTrails)

  const onDoubleClick = useCallback(
    (e) => {
      console.log('lat', e.latlng.lat)
      console.log('lng', e.latlng.lng)
    },
    []
  );

  useMapEvent("dblclick", onDoubleClick);

  // conditionally spread a react prop
  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return (
    <>
      {Object.values(blueMountain.trails).map((trail, id) => {
        console.log('name', trail.name)        
        console.log('obj', Object.values(blueMountain.trails))
        console.log('state', blueMountainTrails)
        console.log('bm', blueMountainTrails.trails[trail.name])

        return (
          <Polyline
            key={id}
            positions={trail.positions}
            pathOptions={{ color: 'purple', weight: 15, opacity: blueMountainTrails.trails[trail.name].isCompleted ? 0.5 : 0 }}
            eventHandlers={{
              click: () => {

                if (!blueMountainTrails.trails[trail.name].isCompleted) {
                  dispatch(isCompleted(trail.name))
                }
                // if already true, open dialog
              },
            }}
          />
        )
      }
      )}
    </>
  )
}

export default MapHandler
