const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('getName should return Employee name', () => {
        expect(new Intern('Sydney Mercier', 3, 'sydney@gmail.com', 'UT Austin').getName()).toBe('Sydney Mercier');
    });

    it('getId should return Employee ID', () => {
        expect(new Intern('Sydney Mercier', 3, 'sydney@gmail.com', 'UT Austin').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new Intern('Sydney Mercier', 3, 'sydney@gmail.com', 'UT Austin').getEmail()).toBe('sydney@gmail.com');
    });

    it('getSchool should return Intern school name', () => {
        expect(new Intern('Sydney Mercier', 3, 'sydney@gmail.com', 'UT Austin').getSchool()).toBe('UT Austin');
    });

    it('getRole should now return Intern', () => {
        expect(new Intern('Sydney Mercier', 3, 'sydney@gmail.com', 'UT Austin').getRole()).toBe('Intern');
    });
});