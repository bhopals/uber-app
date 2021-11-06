import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

export default function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph", // stylesheet location
      center: [-99.29011, 39.39172],
      zoom: 5,
    });
  }, []);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmhvcGFscyIsImEiOiJja3ZsbzhueGo2ZnNkMzFxMWxtbTI4Y25zIn0.Id9MkcbVRvNj8LC7qqv1mQ";

  return <Wrapper></Wrapper>;
}

const Wrapper = tw.div`
 flex-1 flex-column
`;

const Map1 = tw.div``;
