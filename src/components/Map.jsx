import skiMap from '../assets/blue-mountain-ski-trails.png'
import MapHandler from './MapHandler'
import "./styles.css";
import { MapContainer, ImageOverlay } from "react-leaflet";
// import MapComponent from "./MapComponent";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// <div style={{ width: "1100px", height: "600px" }}>
//   <MapContainer
//     style={{ height: "100%", minHeight: "100%" }}
//     bounds={zoom ? undefined : bounds}
//     boundsOptions={{
//       padding: [0, 0]
//     }}
//     maxBounds={bounds}
//     zoom={center ? zoom : undefined}
//     center={zoom ? center : undefined}
//     crs={CRS.Simple}
//     zoomSnap={0} // Important to disable snap after fitBounds
//     whenReady={(e) => e.target.fitBounds(bounds)} // Have the map adjust its view to the same bounds as the Image Overlay
//   >
//     <ImageOverlay
//       url={skiMap}
//       bounds={bounds}
//       className="map_main"
//     />
//     <MapHandler />
//   </MapContainer>
// </div>

// {/* <MapComponent
// imageLink={skiMap}
// // bounds={bounds}
// // className="map_main"
// /> */}

// return (
//   <>
//     <MapContainer
//       style={{ height: "100vh", width: "100vw" }}
//       minZoom={0}
//       crs={CRS.Simple}
//       maxBoundsViscosity={1.0}
//       boundsOptions={{ padding: [50, 50] }}

//     >
//       <MapComponent imageLink={skiMap} />
//       <MapHandler />
//     </MapContainer>
//   </>
// )

const M = ({ width, height, zoom, center }) => {
  const wh = [width, 3250];
  const origin = [0, 0];
  const bounds = [origin, wh];

  return (

    <div style={{ width: "1920px", height: "1000px" }}>
      <MapContainer

        bounds={zoom ? undefined : bounds}
        boundsOptions={{
          padding: [0, 0]
        }}
        maxBounds={bounds}
        zoom={center ? zoom : undefined}
        center={zoom ? center : undefined}
        crs={CRS.Simple}
        zoomSnap={0} // Important to disable snap after fitBounds
        whenReady={(e) => e.target.fitBounds(bounds)} // Have the map adjust its view to the same bounds as the Image Overlay
      >
        <ImageOverlay
          url={skiMap}
          bounds={bounds}
          className="map_main"
        />
        <MapHandler />
      </MapContainer>
    </div>
  );
};

const Map = () => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <M width={1500} height={100} center={[0, 0]} />
    </div>
  );
}

export default Map