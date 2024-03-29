import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Showcase = () => {
  return (
    <>
      <Main />
      <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Showcase;
