import React from "react";
import { ProcessContainer, ProccessText } from "./ProcessComponents";

const Process = ({ id, name, jobs, limit }) => {
  return (
    <ProcessContainer>
      <ProccessText>{id}</ProccessText>
      <ProccessText>{name}</ProccessText>
      <ProccessText>{jobs}</ProccessText>
      <ProccessText>{limit}</ProccessText>
    </ProcessContainer>
  );
};

export default Process;
