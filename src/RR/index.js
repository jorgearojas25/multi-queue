import React from "react";
import Process from "../Process";
import { AddOne, ProccessQueue } from "../utilities/RRutil";
import {
  ActionButton,
  ControlsContainer,
  QueueContainer,
} from "./RRComponents";
const RR = ({
  actualJob,
  setActualProcess,
  q = [],
  setQ,
  isBlocked,
  handleBlock,
  stop,
  handleGlobalList,
}) => {
  const [counter, setCounter] = React.useState(1);
  const [prev, setPrev] = React.useState("");
  const [grantProcess, setGrantProcess] = React.useState({});
  React.useEffect(() => {
    if (!stop && actualJob > 0) {
      setCounter(counter + 1);
      let { actual, actualQ } = ProccessQueue({ q, actualJob: counter });
      if (actual?.id !== prev) {
        setPrev(actual?.id);
        setCounter(1);
      }
      if (actual?.jobs - 1 === actual?.actualJobs) {
        setGrantProcess({ ...actual, start: actualJob });
      }
      if (!actual?.actualJobs) {
        setGrantProcess({ ...grantProcess, end: actualJob });
      }
      if (actualQ === []) {
        handleBlock();
      }

      setQ(actualQ);
      setActualProcess(actual);
    }
  }, [actualJob]);

  React.useEffect(() => {
    if (grantProcess.end) {
      handleGlobalList(grantProcess);
    }
  }, [grantProcess]);

  const AddOneQ = () => {
    setQ(AddOne({ q }));
  };

  return (
    <>
      <ControlsContainer>
        <ActionButton onClick={AddOneQ}>Agregar uno</ActionButton>
        <ActionButton onClick={handleBlock}>
          {isBlocked ? "desbloquear" : "bloquear"}
        </ActionButton>
      </ControlsContainer>
      <QueueContainer>
        {q.map((element) => (
          <Process key={element.id} {...element} />
        ))}
      </QueueContainer>
    </>
  );
};

export default RR;
