const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('getName should return Employee name', () => {
        expect(new Employee('Sydney Mercier', 3, 'sydney@gmail.com').getName()).toBe('Sydney Mercier');
    });

    it('getId should return Employee ID', () => {
        expect(new Employee('Sydney Mercier', 3, 'sydney@gmail.com').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new Employee('Sydney Mercier', 3, 'sydney@gmail.com').getEmail()).toBe('sydney@gmail.com');
    });

    it('getRole should return Employee', () => {
        expect(new Employee('Sydney Mercier', 3, 'sydney@gmail.com').getRole()).toBe('Employee');
    });
});