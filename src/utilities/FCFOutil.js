import { Process } from "./ProcessObj";
import Faker from "faker";
export const ProccessQueue = ({ q = [] }) => {
  if (!q.length) {
    return [];
  }
  let actualProcess = q.shift();
  if (actualProcess.actualJobs) {
    actualProcess.actualJobs -= 1;
    q.unshift(actualProcess);
  }
  if (actualProcess.actualJobs === 0) {
    actualProcess = q.shift();
  }

  return { actual: actualProcess, actualQ: q };
};

export const GenerateFCFO = ({ size = 5 }) => {
  return new Array(size).fill({}, 0, 5).map(
    () =>
      new Process({
        id: Faker.datatype.uuid(),
        name: Faker.name.firstName(),
        jobs: Faker.datatype.number({ max: 5, min: 1 }),
      })
  );
};

export const AddOne = ({ q = [] }) => {
  q.push(
    new Process({
      id: Faker.datatype.uuid(),
      name: Faker.name.firstName(),
      jobs: Faker.datatype.number({ max: 5, min: 1 }),
    })
  );
  return q;
};

export const removeOne = ({ q }) => {
  return q;
};
