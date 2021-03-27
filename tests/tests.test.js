const { taskH, taskD, showPascalTriangle } = require('./tasks.js');

describe('Task 178 H', () => {
  it('Should return 0 when array is [1, 2, 3]', () => {
    expect(taskH([1, 2, 3])).toBe(0);
  });
  it('Should return 2 when array is [1, 2, 4, 4]', () => {
    expect(taskH([1, 2, 4, 4])).toBe(1);
  });
  it('Should return 0 when arrray is empty', () => {
    expect(taskH([])).toBe(0);
  });
  it('Should return 2 when arrray is [1, -11, 3, 4, -55, 6]', () => {
    expect(taskH([1, -11, 3, 4, -55, 6])).toBe(2);
  });
});

describe('Task 178 D', () => {
  it('Should return 1 for [1, 2, 36, 37, 40]', () => {
    expect(taskD([1, 2, 36, 37, 40])).toBe(1);
  });
  it('Should return 0 for [1, 2, 36]', () => {
    expect(taskD([1, 2, 36])).toBe(0);
  });
  it('Should return 0 for []', () => {
    expect(taskD([])).toBe(0);
  });
  it('Should return 2 for [1, 2, 36, 37, 40, 90]', () => {
    expect(taskD([1, 2, 36, 37, 40, 90])).toBe(2);
  });
});

describe('Task 555', () => {
  it('Should return the first row of triangle', () => {
    expect(showPascalTriangle(1)).toEqual([[1]]);
  });
  it('Should return the first two rows of triangle', () => {
    expect(showPascalTriangle(2)).toEqual([[1], [1, 1]]);
  });
  it('Should return the first three rows of triangle', () => {
    expect(showPascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });
});
