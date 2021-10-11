import styled from "styled-components";
import colors from "./colors";

export const AppContainer = styled.section`
  padding: 2%;
  display: flex;
  flex-flow: column nowrap;
  background-color: ${colors.Aero_Blue};
  height: "100%";
  align-items: center;
  height: 100%;
`;
export const ManagerContainer = styled.section`
  background-color: ${colors.Black_Olive};
  color: ${colors.Aero_Blue};
  width: 90%;
  padding: 2% 5% 2% 5%;
`;

export const ManageActions = styled.section`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 3%;
`;

export const GlobalAction = styled.button`
  background-color: ${colors.Opal};
  height: 2rem;
  margin-right: 2%;
  padding: 2% 3% 4% 3%;
`;

export const QueuesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin: 4% 0 4% 0;
`;
export const FCFOContainer = styled.section`
  background-color: ${colors.Wild_Blue_Yonder};
  width: 30%;
`;
export const SJFContainer = styled.section`
  background-color: ${colors.Violet_Blue_Crayola};
  width: 30%;
`;
export const RRContainer = styled.section`
  background-color: ${colors.Slate_Blue};
  width: 30%;
`;
