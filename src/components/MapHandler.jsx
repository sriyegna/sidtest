import { useCallback, useEffect, useState } from "react";
import { useMapEvent } from "react-leaflet/hooks";
import { Polyline } from "react-leaflet";
import blueMountain from './blue-mountain.json'

const MapHandler = () => {
  const [state, setState] = useState(blueMountain)
  // const blueMountainTrails = useSelector()

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
      {state.trails.map((trail, id) => 
        (<Polyline
          key={id}
          positions={trail.positions}
          pathOptions={{ color: 'purple', weight: 15, opacity: trail.isCompleted ? 0.5 : 0 }}
          eventHandlers={{
            click: () => {
              // console.log(state)
              const tempState = { ...state, trails: [...state.trails] }
              tempState.trails[id].isCompleted = !trail.isCompleted
              setState(tempState)
            },
          }}
        />)
      )}
    </>
  )
}

export default MapHandler
