import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Map from "./components/Map";

import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";

export default function Home() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmhvcGFscyIsImEiOiJja3ZsbzhueGo2ZnNkMzFxMWxtbTI4Y25zIn0.Id9MkcbVRvNj8LC7qqv1mQ";

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo
            className=""
            src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
          />
        </Header>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col
`;

const ActionItems = tw.div``;
