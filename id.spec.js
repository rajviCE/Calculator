// calculator.test.js
const add = require('./calculator');

describe("Unit Tests for add function", () => {
    test("Empty string returns 0", () => {
        expect(add("")).toBe(0);
    });

    test("Comma and newline delimiters", () => {
        expect(add("1,2\n3,4")).toBe(10);
    });

    test("Simple comma separation", () => {
        expect(add("1,2,3,4")).toBe(10);
    });

    test("Ignore numbers >= 1000", () => {
        expect(add("1000,2\n3")).toBe(5);
    });

    test("Custom delimiters: comma and semicolon", () => {
        expect(add("//[,][;]\n1;2\n3,4")).toBe(10);
    });

    test("Custom delimiter: ***", () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test("Custom delimiters: * and %", () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test("Custom delimiters: ** and %%", () => {
        expect(add("//[**][%%]\n1**2%%3")).toBe(6);
    });

    test("Throws error for negative numbers", () => {
        expect(() => add("-1,2,-3,4")).toThrow("negative numbers not allowed -1,-3");
    });

    test("Delimiter $ with values", () => {
        expect(add("//[$]\n745$6")).toBe(751);
    });

    test("Only numbers are allowed", () => {
        expect(()=>add("//[$]\n-75&6")).toThrow("Non-numeric number present");
    });
});
