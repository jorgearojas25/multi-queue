import { Process } from "./ProcessObj";
import Faker from "faker";
export const ProccessQueue = ({ q }) => {
  return q;
};

export const GenerateFCFO = ({ size = 5 }) => {
  return new Array(size)
    .fill({}, 0, 5)
    .map(
      () =>
        new Process({
          id: Faker.datatype.uuid(),
          name: Faker.name.firstName(),
          jobs: Faker.datatype.number(10),
        })
    );
};

export const AddOne = ({ q }) => {
  return q;
};

export const removeOne = ({ q }) => {
  return q;
};
