import Validator from '../Validator';

test.each([
  ['aCCd'],
  ['ab2-1cd'],
  ['ab1_554cd'],
  ['a2b2C2d2f2z'],
  ['ab-1_a-22cd'],
])('тест пройден', (name) => {
  const result = new Validator(name);

  expect(result.validateUsername()).toBeTruthy();
});

test.each([
  ['1asd'],
  ['asd1'],
  ['asd-'],
  ['asd_'],
  ['-asd'],
  ['_asd'],
  ['as5556d'],
])('Тест не пройден', (name) => {
  const result = new Validator(name);

  expect(result.validateUsername()).toBeFalsy();
});
