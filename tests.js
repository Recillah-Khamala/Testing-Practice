const Calculator = require("./calculator");
const {
    stringLength,
    reverseString,
    capitalize
} = require("./tasks");

describe('stringLength', () => {
    // tests for task 1 string length
    it('returns the total number of characters in a string', () => {
        expect(stringLength('come here')).toEqual(8)
    })

    it('throws an error as a string has to have more than one character', () => {
        expect(() => stringLength('')).toThrowError('Should have atleast one character')
    })

    it('it throws an error as a string has to have less than ten character', () => {
        expect(() => stringLength('')).toThrorError('Should have less than 10 characters')
    })
})

describe('reverseString', () => {
    it('reverses the string', () => {
        expect(reverseString('hello')).toBe('olleh')
    })

    it('retrurns an empty string', () => {
        expect(reverseString('')).toBe('')
    })
})

describe('capitalize', () => {
    it('capitalizes the first character', () => {
        expect(capitalize('neema')).toBe('Neema')
    })
})

// tests for task 3 calculator

const calculator = new Calculator();

describe('Addition', () => {
    it('sums up two numbers', () => {
        expect(() => calculator.add(3, 6)).toEqual(9);
    })
    it('sums up negative numbers', () => {
        expect(() => calculator.add(-4, -1)).toEqual(-5);
    })
    it('sums up numbers with decimal points', () => {
        expect(() => calculator.add(4.3, 2.5)).toEqual(6.8);
    })
})

describe('Subtraction', () => {
    it('gives correct output when subtraction two numbers', () => {
        expect(() => calculator.subtract(9, 1)).toEqual(8);
    })
    it('gives correct output when subtraction two negative numbers', () => {
        expect(() => calculator.subtract(-6, -1)).toEqual(-5);
    })
    it('gives correct output when subtraction two numbers with decimal points', () => {
        expect(() => calculator.subtract(9.6, 1.8)).toEqual(7.8);
    })
})

describe('division', () => {
    it('gives correst output when dividing two numbers', () => {
        expect(() => calculator.divide(8, 4)).toEqual(2);
    });
    it('gives correst output when dividing two numbers where one of them is 0', () => {
        expect(() => calculator.divide(0, 3)).toEqual(0);
    });
    it('gives correst output when dividing two numbers with decimal points', () => {
        expect(() => calculator.divide(0.4, 0.2)).toEqual(0.2);
    });
})

describe('multiplication', () => {
    it('gives correct output for multiplying 2 numbers', () => {
        expect(() => calculator.multiply(2, 5)).toEqual(10);
    });
    it('gives correct output for multiplying 2 numbers with one being 0', () => {
        expect(() => calculator.multiply(6, 0)).toEqual(0);
    });
    it('gives correct output for multiplying 2 numbers with decimal points', () => {
        expect(() => calculator.multiply(2.3, 5.1)).toEqual(11.73);
    });
})