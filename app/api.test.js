const api = require("./api");

describe('fibonnaci', () => {

    test("fibonacci of 10 is 55", () => {
        expect(api.fibonacci(10)).toBe(55);
    });


    test("fibonacci of 1 is 1", () => {
        expect(api.fibonacci(1)).toBe(1);
    });

    test("fibonacci of 0 is 0", () => {
        expect(api.fibonacci(0)).toBe(0);
    });

    test("fibonacci of negative number is 0", () => {
        expect(api.fibonacci(-1)).toBe(0);
    });
});

describe('factorial', () => {

    test('factorial of 0 is 1', () => {
        expect(api.factorial(0)).toBe(1);
    });

    test('factorial of negative number is 1', () => {
        expect(api.factorial(-1)).toBe(1);
    });

    test('factorial of 5 is 120', () => {
        expect(api.factorial(5)).toBe(120);
    });
})
