import {
  AppContainer,
  ManagerContainer,
  QueuesContainer,
  FCFOContainer,
  SJFContainer,
  RRContainer,
} from "./AppComponents";

function App() {
  return (
    <AppContainer>
      <ManagerContainer></ManagerContainer>
      <QueuesContainer>
        <FCFOContainer></FCFOContainer>
        <SJFContainer></SJFContainer>
        <RRContainer></RRContainer>
      </QueuesContainer>
    </AppContainer>
  );
}

export default App;
