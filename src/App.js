import React from "react";
import {
  AppContainer,
  ManagerContainer,
  ManageActions,
  QueuesContainer,
  FCFOContainer,
  SJFContainer,
  RRContainer,
  GlobalAction,
} from "./AppComponents";
import FCFO from "./FCFO";
import Manager from "./Manager";
import RR from "./RR";
import SJF from "./SJF";
import { GenerateFCFO } from "./utilities/FCFOutil";
import { GenerateSJF } from "./utilities/SJFutil";
import { GenerateRR } from "./utilities/RRutil";

function App() {
  const [actualJob, setActualJob] = React.useState(0);
  const [actualProcess, setActualProcess] = React.useState({});
  const [fcfoQ, setFcfoQ] = React.useState(GenerateFCFO(5));
  const [sjfQ, setSjfQ] = React.useState(GenerateSJF(5));
  const [rrQ, setRRQ] = React.useState(GenerateRR(5));
  const [blockFCFO, setBlockFCFO] = React.useState(false);
  const [blockSJF, setBlockSJF] = React.useState(false);
  const [blockRR, setBlockRR] = React.useState(false);
  const [stopFCFO, setStopFCFO] = React.useState(false);
  const [stopSJF, setStopSJF] = React.useState(true);
  const [stopRR, setStopRR] = React.useState(true);
  const [globalList, setGlobalList] = React.useState([]);
  const countRef = React.useRef(null);

  const handleStart = () => {
    if (countRef.current) {
      return null;
    }
    countRef.current = setInterval(() => {
      setActualJob((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
  };

  const handleResume = () => {
    countRef.current = setInterval(() => {
      setActualJob((actualJob) => actualJob + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setActualJob(0);
    setFcfoQ(GenerateFCFO(5));
  };

  React.useEffect(() => {
    if (blockFCFO) {
      setStopFCFO(true);
      setStopSJF(false);
    }
    if (blockSJF) {
      setStopSJF(true);
      setStopRR(false);
    }
    if (blockRR) {
      setStopRR(true);
    }
    if (fcfoQ && !blockFCFO) {
      setStopFCFO(false);
      return;
    }
    if (!fcfoQ && sjfQ && !blockSJF) {
      setStopSJF(false);
      return;
    }
    if (!fcfoQ && !sjfQ && rrQ && !blockRR) {
      setStopRR(false);
      return;
    }
  }, [actualJob]);

  const addGlobalList = (element) => {
    setGlobalList([...globalList, element]);
  };

  const handleBlockFCFO = () => {
    setBlockFCFO(!blockFCFO);
  };
  const handleBlockSJF = () => {
    setBlockSJF(!blockSJF);
  };
  const handleBlockRR = () => {
    setBlockRR(!blockRR);
  };

  //React.useEffect(() => console.log(globalList), [globalList]);

  React.useEffect(
    () => console.log(stopFCFO, stopSJF, stopRR),
    [stopFCFO, stopSJF, stopRR]
  );

  return (
    <AppContainer>
      <ManagerContainer>
        <ManageActions>
          <GlobalAction onClick={handleStart}>Iniciar</GlobalAction>
          <GlobalAction onClick={handlePause}>Pausar</GlobalAction>
          <GlobalAction onClick={handleResume}>Continuar</GlobalAction>
          <GlobalAction onClick={handleReset}>Reiniciar</GlobalAction>
        </ManageActions>
        <Manager actualJob={actualJob} actualProcess={actualProcess} />
      </ManagerContainer>
      <QueuesContainer>
        <FCFOContainer>
          <FCFO
            q={fcfoQ}
            setQ={setFcfoQ}
            actualJob={actualJob}
            setActualProcess={setActualProcess}
            handleGlobalList={addGlobalList}
            isBlocked={blockFCFO}
            stop={stopFCFO}
            handleBlock={handleBlockFCFO}
          />
        </FCFOContainer>
        <SJFContainer>
          <SJF
            q={sjfQ}
            setQ={setSjfQ}
            actualJob={actualJob}
            setActualProcess={setActualProcess}
            handleGlobalList={addGlobalList}
            isBlocked={blockSJF}
            stop={stopSJF}
            handleBlock={handleBlockSJF}
          />
        </SJFContainer>
        <RRContainer>
          <RR />
        </RRContainer>
      </QueuesContainer>
    </AppContainer>
  );
}

export default App;
