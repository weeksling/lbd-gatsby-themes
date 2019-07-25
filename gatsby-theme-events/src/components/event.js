import React from "react";
import { Styled } from "theme-ui";

const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <Styled.h2>
      {name} ({location})
    </Styled.h2>
    <Styled.p>
      {startDate}-{endDate}
    </Styled.p>
    <Styled.p>
      Website: <a href={url}>{url}</a>
    </Styled.p>
  </div>
);

export default Event;
