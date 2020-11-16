const { sum, sayHello, arrayMaker, checkEmail } = require("../functions");

describe("tests for sum function", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("sum of 2 + 3 is not 10", () => {
    expect(sum(2, 3)).not.toBe(10);
  });
});

describe("tests for sayHello function", () => {
  test("sayHello says hello", () => {
    expect(sayHello()).toBe("hello");
  });
});

test("arrayMaker(1,2,3) won't contain the number 4", () => {
  expect(arrayMaker(1, 2, 3)).not.toContain(4);
});

test("checkEmail(colefinlayson) will return false", () => {
  expect(checkEmail("colefinlayson")).toBeFalsy();
});

test("checkEmail(colefinlayson@devmountain.com) will return true", () => {
  expect(checkEmail("colefinlayson@devmountain.com")).toBeTruthy();
});

test('object assignment', ()=> {
    const data = {one: 1}
    data['two'] = 2
    data.three = 3

    expect(data).toEqual({one: 1, two: 2, three: 3})
})

test('expect true to be truthy', () => {
    expect(true).toBeTruthy();
})
