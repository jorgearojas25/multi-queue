import React from "react";
import Process from "../Process";
import { GenerateFCFO } from "../utilities/FCFOutil";
import {
  ActionButton,
  ControlsContainer,
  QueueContainer,
} from "./FCFOComponents";

const FCFO = ({ actualJob, setBlock, setQueueJob }) => {
  const [q, setQ] = React.useState(GenerateFCFO(5));

  React.useEffect(() => {
    console.log(q);
  }, [actualJob]);

  if (!q) {
    return null;
  }

  return (
    <>
      <ControlsContainer></ControlsContainer>
      <QueueContainer>
        {q.map((element) => (
          <Process {...element} />
        ))}
      </QueueContainer>
    </>
  );
};

export default FCFO;
