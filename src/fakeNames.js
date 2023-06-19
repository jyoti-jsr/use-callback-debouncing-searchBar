import faker from "faker";

export const fakeNames = Array.from(Array(400), () => {
  return faker.name.findName();
});
