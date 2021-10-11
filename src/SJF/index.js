import React from "react";
import Process from "../Process";
import { AddOne, ProccessQueue } from "../utilities/SJFutil";
import {
  ActionButton,
  ControlsContainer,
  QueueContainer,
} from "./SJFComponents";

const SJF = ({
  actualJob,
  setActualProcess,
  q = [],
  setQ,
  isBlocked,
  handleBlock,
  stop,
  handleGlobalList,
}) => {
  const [grantProcess, setGrantProcess] = React.useState({});
  React.useEffect(() => {
    if (!stop && actualJob > 0) {
      let { actual, actualQ } = ProccessQueue({ q });
      if (actual?.jobs - 1 === actual?.actualJobs) {
        setGrantProcess({ ...actual, start: actualJob });
      }
      if (!actual?.actualJobs) {
        setGrantProcess({ ...grantProcess, end: actualJob });
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

export default SJF;
