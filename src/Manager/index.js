import React from "react";
import { ManagerText, ManagerHead, ManagerBody } from "./ManagerComponents";

const Manager = ({ actualJob, actualProcess }) => {
  return (
    <>
      <ManagerHead>
        <ManagerText>Proceso actual: {actualProcess?.id}</ManagerText>
        <ManagerText></ManagerText>
      </ManagerHead>
      <ManagerBody>
        <ManagerText>Alias: {actualProcess?.name}</ManagerText>
        <ManagerText>Procesos: {actualProcess?.jobs}</ManagerText>
        <ManagerText>
          Procesos Restantes: {actualProcess?.actualJobs}
        </ManagerText>
        {actualProcess?.limit ? (
          <ManagerText>Quantum: {actualProcess?.limit}</ManagerText>
        ) : null}
      </ManagerBody>
    </>
  );
};

export default Manager;
