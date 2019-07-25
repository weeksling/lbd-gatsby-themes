import React from "react";
import Layout from "../components/layout";
import Event from "../components/event";

const EventTemplate = ({ event }) => {
  return (
    <Layout>
      <Event {...event} />
    </Layout>
  );
};

export default EventTemplate;
