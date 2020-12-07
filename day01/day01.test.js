const lib = require('./day01.library.js');

test('day 01, part 1 exampleInput', () => {
  const exampleInput = `1721
979
366
299
675
1456`.split("\n");

  expect(lib.part1(exampleInput, 2020)).toBe(514579);
});

test('day 01, part 2 example input', () => {
  const exampleInput = ``.split("\n");

  expect(lib.part2(exampleInput)).toBe(0);
})
