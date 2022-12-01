const { readFile } = require("fs/promises");
const { sortBy, prop } = require("ramda");

const run1 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const elves = input.split("\n").reduce(
    ([current, ...rest], nxt, idx) => {
      if (!nxt) {
        const elf = {
          name: idx,
          calories: 0,
        };
        return [elf, current, ...rest];
      }
      const elf = {
        ...current,
        calories: current.calories + parseInt(nxt),
      };
      return [elf, ...rest];
    },
    [
      {
        name: 0,
        calories: 0,
      },
    ]
  );
  const sortedElves = sortBy(prop("calories"), elves);
  console.log(sortedElves.slice(-1)[0].calories);
};

const run2 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const elves = input.split("\n").reduce(
    ([current, ...rest], nxt, idx) => {
      if (!nxt) {
        const elf = {
          name: idx,
          calories: 0,
        };
        return [elf, current, ...rest];
      }
      const elf = {
        ...current,
        calories: current.calories + parseInt(nxt),
      };
      return [elf, ...rest];
    },
    [
      {
        name: 0,
        calories: 0,
      },
    ]
  );
  const sortedElves = sortBy(prop("calories"), elves);
  console.log(
    sortedElves.slice(-3).reduce((acc, nxt) => acc + nxt.calories, 0)
  );
};

run1();
run2();
