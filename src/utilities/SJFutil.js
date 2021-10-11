import { Process } from "./ProcessObj";
import Faker from "faker";
export const ProccessQueue = ({ q = [] }) => {
  if (!q.length) {
    return [];
  }
  let index = getMinorJob(q);
  let actualProcess = q.splice(index, 1)[0];
  if (actualProcess.actualJobs) {
    actualProcess.actualJobs -= 1;
    q.splice(index, 0, actualProcess);
  }
  if (actualProcess.actualJobs === 0) {
    actualProcess = q.splice(index, 1)[0];
  }

  return { actual: actualProcess, actualQ: q };
};

const getMinorJob = (q) => {
  let elementI = 0;
  let minorElement = { jobs: 100 };
  q.forEach((element, index) => {
    if (element.jobs < minorElement?.jobs) {
      minorElement = element;
      elementI = index;
    }
  });

  return elementI;
};

export const GenerateSJF = ({ size = 5 }) => {
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
