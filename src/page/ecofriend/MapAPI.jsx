import React, { useCallback, useEffect, useRef } from "react";

function Home() {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.552, lng: 126.988 },
      zoom: 15,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      style={{ width: "1028px", height: "480px" }}
      ref={mapRef}
    ></div>
  );
}

export default Home;