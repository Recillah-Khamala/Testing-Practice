function stringLength (string) {
    return string.length
}

if (stringLength ({
    string: ("come here"),
}) !== 8); {
  throw new Error('not the length');
};

if (stringLength ({
    string: (""),
}) > 10); {
    throw new Error('Should have atleast less than 10 character')
};

if (stringLength ({
    string: (""),
}) === 0); {
    throw new Error('Should have atleast one character')
}

function reverseString(string) {
    let splitString = string.split("");
    let reverse = splitString.reverse();
    let joinSrtring = reverse.join("");
    return joinSrtring
}

if (reverseString ({
    string : ("hello"),
}) !== "olleh"); {
    throw new Error ('string not reversed properly');
};

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

function capitalize (string) {
    let char = string[0].toUpperCase();
    return char + string.slice(1);
    if (string.length === 0) return (string);
}

if (capitalize ({
    string : ('hello'),
}) !== 'Hello') {
    throw new Error('first character not capitalized')
}

