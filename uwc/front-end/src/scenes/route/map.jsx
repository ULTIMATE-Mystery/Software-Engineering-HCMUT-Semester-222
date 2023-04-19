import { useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { DirectionsService, DirectionsRenderer } from "google-maps-react";
import "./glassmorphism.css";
const mapStyles = {
  width: "97%",
  height: "70vh",
};

const MapContainer = (props) => {
  const [state, setState] = useState({
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  });

  const onMarkerClick = (props, marker, e) =>
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onClose = (props) => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  const [directions, setDirections] = useState(null);

  // const handleShowRoute = () => {
  //   const directionsService = new window.google.maps.DirectionsService();
  //   const origin = new window.google.maps.LatLng(
  //     10.880830334678992,
  //     106.8053642308384
  //   );
  //   const destination = new window.google.maps.LatLng(
  //     10.772122418377451,
  //     106.65789911416871
  //   ); // replace with your destination coordinates
  //   const waypoints = []; // add any waypoints you want to include
  //   const request = {
  //     origin,
  //     destination,
  //     waypoints,
  //     travelMode: window.google.maps.TravelMode.DRIVING,
  //   };
  //   directionsService.route(request, (result, status) => {
  //     if (status === window.google.maps.DirectionsStatus.OK) {
  //       setDirections(result);
  //     }
  //   });
  // };

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{
        lat: 10.880830334678992,
        lng: 106.8053642308384,
      }}
    >
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            polylineOptions: {
              strokeColor: "#000",
              strokeOpacity: 0.8,
              strokeWeight: 5,
            },
          }}
        />
      )}
      <Marker
        onClick={onMarkerClick}
        name={"Kenyatta International Convention Centre"}
      />
      <InfoWindow
        marker={state.activeMarker}
        visible={state.showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>
      {/* <button onClick={handleShowRoute}>Show Route</button> */}
    </Map>
  );
};

export const handleShowRoute = (setDirections) => {
  const directionsService = new window.google.maps.DirectionsService();
  const origin = new window.google.maps.LatLng(
    10.880092172933786,
    106.80631459637833
  );
  const destination = new window.google.maps.LatLng(
    10.772117148489604,
    106.65789911416871
  ); // replace with your destination coordinates
  const waypoints = []; // add any waypoints you want to include
  const request = {
    origin,
    destination,
    waypoints,
    travelMode: window.google.maps.TravelMode.DRIVING,
  };
  directionsService.route(request, (result, status) => {
    if (status === window.google.maps.DirectionsStatus.OK) {
      setDirections(result);
    }
  });
};

export default GoogleApiWrapper({
  apiKey: process.env.GG_MAP_API,
})(MapContainer);
