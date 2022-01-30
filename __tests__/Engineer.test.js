const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('getName should return Employee name', () => {
        expect(new Engineer('Sydney Mercier', 3, 'sydney@gmail.com', 'sygmo').getName()).toBe('Sydney Mercier');
    });

    it('getId should return Employee ID', () => {
        expect(new Engineer('Sydney Mercier', 3, 'sydney@gmail.com', 'sygmo').getId()).toBe(3);
    });

    it('getEmail should return Employee email', () => {
        expect(new Engineer('Sydney Mercier', 3, 'sydney@gmail.com', 'sygmo').getEmail()).toBe('sydney@gmail.com');
    });

    it('getGithub should return Engineer GitHub username', () => {
        expect(new Engineer('Sydney Mercier', 3, 'sydney@gmail.com', 'sygmo').getGithub()).toBe('sygmo');
    });

    it('getRole should now return Engineer', () => {
        expect(new Engineer('Sydney Mercier', 3, 'sydney@gmail.com', 'sygmo').getRole()).toBe('Engineer');
    });
});