import React from "react";
import { ProcessContainer, ProccessText } from "./ProcessComponents";

const Process = ({ id, name, jobs, limit, actualJobs }) => {
  return (
    <ProcessContainer>
      <ProccessText>ID: {id}</ProccessText>
      <ProccessText>Proceso: {name}</ProccessText>
      <ProccessText>Rafaga: {jobs}</ProccessText>
      <ProccessText>Rafaga restante: {actualJobs}</ProccessText>
      {limit ? <ProccessText>Rafaga limite: {limit}</ProccessText> : ""}
    </ProcessContainer>
  );
};

export default Process;
