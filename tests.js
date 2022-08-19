import Calculator from "./calculator";
import { stringLength, reverseString, capitalize } from "./tasks";

// tests for task 1 string length
test('function to return the total number of characters in a string', () => {
    expect(stringLength('come here')).tobe(8)
})

test('a string to have more than one character', () => {
    expect(() => stringLength('')).tothrow('Should have atleast one character')
})

test('a string to have less than ten character', () => {
    expect(() => stringLength('')).tothrow('Should have less than 10 characters')
})


// test for task 2 reverse string

test('function to reverse the string', () => {
    expect(reverseString('hello')).tobe('olleh')
})

test('function to retrurn an empty string', () => {
    expect(reverseString('')).tobe('')
})

// tests for task 3 calculator

const calculator = new Calculator();

describe('Addition', () => {
    test('when you add two numbers, the output will be their correct summation', () => {
        expect(() => calculator.add(3, 6)).tobe(9);
    })
    test('when negative numbers are added, the correct output is given', () => {
        expect(() => calculator.add(-4, -1)).tobe(-5);
    })
    test('When numbers with decimal points are added, the correct output s given', () => {
        expect(() => calculator.add(4.3, 2.5)).tobe(6.8);
    })
})

describe('Subtraction', () => {
    test('correct output when subtraction two numbers', () => {
        expect(() => calculator.subtract(9, 1)).tobe(8);
    })
    test('correct output when subtraction two negative numbers', () => {
        expect(() => calculator.subtract(-6, -1)).tobe(-5);
    })
    test('correct output when subtraction two numbers with decimal points', () => {
        expect(() => calculator.subtract(9.6, 1.8)).tobe(7.8);
    })
})

describe('division', () => {
    test('correst output when dividing two numbers', () => {
        expect(() => calculator.divide(8,4)).tobe(2);
    });
    test('correst output when dividing two numbers where one of them is 0', () => {
        expect(() => calculator.divide(0,3)).tobe(0);
    });
    test('correst output when dividing two numbers with decimal points', () => {
        expect(() => calculator.divide(0.4,0.2)).tobe(0.2);
    });
})

describe('multiplication', () => {
    test('correct output for multiplying 2 numbers', () => {
        expect(() => calculator.multiply(2,5)).tobe(10);
    });
    test('correct output for multiplying 2 numbers with one being 0', () => {
        expect(() => calculator.multiply(6,0)).tobe(0);
    });
    test('correct output for multiplying 2 numbers with decimal points', () => {
        expect(() => calculator.multiply(2.3,5.1)).tobe(11.73);
    });
})


// tests for task 4 capitalize
test('first character should be capitalized', () => {
    expect(capitalize('neema')).tobe('Neema')
})
