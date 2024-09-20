const calculateBonus = require("./Homework_2-4-4");

describe("Suite for Bonus calculation", () => {
  test("Calculating Bonus Negative", () => {
    expect(calculateBonus(2, 5)).toBe(50);
  });

  test("Calculating Bonus Positive", () => {
    expect(calculateBonus(2, 5)).toBe(7);
  });

  test("Calculating Bonus More Than 50 Negative", () => {
    expect(calculateBonus(21, 30)).toBe(51);
  });

  test("Calculating Bonus More Than 50 Positive", () => {
    expect(calculateBonus(21, 30)).toBe(50);
  });

  test("Calculating Bonus 0 Negative", () => {
    expect(calculateBonus(0, 0)).toBe(50);
  });

  test("Calculating Bonus 0 Positive", () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });
});
