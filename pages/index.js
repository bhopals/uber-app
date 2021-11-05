import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import mapboxgl from "!mapboxgl";
import tw from "tailwind-styled-components";

useEffect(() => {}, []);

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmhvcGFscyIsImEiOiJja3ZsbzhueGo2ZnNkMzFxMWxtbTI4Y25zIn0.Id9MkcbVRvNj8LC7qqv1mQ";

export default function Home() {
  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>Map</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div``;

const Map = tw.div``;

const ActionItems = tw.div``;
