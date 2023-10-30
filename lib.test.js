const { test, expect } = require("@jest/globals");
const lib = require("./lib");

// test avg()
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

// test prime()
test("prime(2) should be true", () => {
    expect(lib.prime(2)).toBe(true);
});

test("prime(12) should be false", () => {
    expect(lib.prime(12)).toBe(false);
});

// test fact()
test("fact(4) should be 24", () => {
    expect(lib.fact(4)).toBe(24);
});

test("fact(5) should be 120", () => {
    expect(lib.fact(5)).toBe(120);
});