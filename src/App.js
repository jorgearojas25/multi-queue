import {
  AppContainer,
  ManagerContainer,
  QueuesContainer,
  FCFOContainer,
  SJFContainer,
  RRContainer,
} from "./AppComponents";
import FCFO from "./FCFO";
import Manager from "./Manager";
import RR from "./RR";
import SJF from "./SJF";

function App() {
  return (
    <AppContainer>
      <ManagerContainer>
        <Manager />
      </ManagerContainer>
      <QueuesContainer>
        <FCFOContainer>
          <FCFO />
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
