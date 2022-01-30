const Manager = require('../lib/Manager');

describe('Intern class', () => {
    it('getName should return Employee name', () => {
        expect(new Manager('Sydney Mercier', 3, 'sydney@gmail.com', '221B').getName()).toBe('Sydney Mercier');
    });

    it('getId should return Employee ID', () => {
        expect(new Manager('Sydney Mercier', 3, 'sydney@gmail.com', '221B').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new Manager('Sydney Mercier', 3, 'sydney@gmail.com', '221B').getEmail()).toBe('sydney@gmail.com');
    });

    it('getOfficeNumber should return Manager office number', () => {
        expect(new Manager('Sydney Mercier', 3, 'sydney@gmail.com', '221B').getOfficeNumber()).toBe('221B');
    });

    it('getRole should now return Manager', () => {
        expect(new Manager('Sydney Mercier', 3, 'sydney@gmail.com', '221B').getRole()).toBe('Manager');
    });
});