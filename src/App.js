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
  const [blockSJF, setBlockSJF] = React.useState(true);
  const [blockRR, setBlockRR] = React.useState(true);
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
    if (!fcfoQ) {
      setBlockFCFO(true);
      setBlockSJF(false);
      return;
    }
    if (sjfQ && blockFCFO) {
      setBlockSJF(false);
    }
    if (!sjfQ) {
      setBlockSJF(true);
      setBlockRR(false);
      return;
    }
    if (rrQ && blockFCFO && blockSJF) {
      setBlockRR(false);
    }
    if (!rrQ) {
      setBlockRR(true);
      return;
    }
  }, [actualJob]);

  const addGlobalList = (element) => {
    setGlobalList([...globalList, element]);
  };

  React.useEffect(() => console.log(globalList), [globalList]);

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
          />
        </FCFOContainer>
        <SJFContainer>
          <SJF />
        </SJFContainer>
        <RRContainer>
          <RR />
        </RRContainer>
      </QueuesContainer>
    </AppContainer>
  );
}

export default App;
