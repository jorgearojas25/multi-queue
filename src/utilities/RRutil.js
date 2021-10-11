import { Process } from "./ProcessObj";
import Faker from "faker";

export const ProccessQueue = ({ q = [], actualJob }) => {
  if (!q.length) {
    return [];
  }
  let actualProcess = q.shift();

  console.log(actualJob);

  if (
    actualProcess.jobs - actualProcess.actualJobs > 0 &&
    (actualProcess.jobs - actualProcess.actualJobs) % actualProcess.limit ===
      0 &&
    actualJob % 3 === 0
  ) {
    q.push(actualProcess);

    return {
      actual: actualProcess,
      actualQ: q,
    };
  }

  if (actualProcess.actualJobs) {
    actualProcess.actualJobs -= 1;
    q.unshift(actualProcess);
  }
  if (actualProcess.actualJobs === 0) {
    actualProcess = q.shift();
  }

  return { actual: actualProcess, actualQ: q };
};

export const GenerateRR = ({ size = 5 }) => {
  return new Array(size).fill({}, 0, 5).map(
    () =>
      new Process({
        id: Faker.datatype.uuid(),
        name: Faker.name.firstName(),
        jobs: Faker.datatype.number({ max: 10, min: 1 }),
        limits: 3,
      })
  );
};

export const AddOne = ({ q }) => {
  q.push(
    new Process({
      id: Faker.datatype.uuid(),
      name: Faker.name.firstName(),
      jobs: Faker.datatype.number({ max: 5, min: 1 }),
      limits: 3,
    })
  );
  return q;
};

export const removeOne = ({ q }) => {
  return q;
};
