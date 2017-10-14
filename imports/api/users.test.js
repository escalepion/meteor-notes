import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { validateNewUser } from './users';

if (Meteor.isServer) {
    describe('users', function () {
        it('should allow valid email adress', function () {
            const testUser = {
                emails: [
                    {
                        address: 'test@example.com'
                    }
                ]
            };
            const res = validateNewUser(testUser);
            expect(res).toBe(true);
        });

        it('should reject invalid email', function () {
            const testUser = {
                emails: [
                    {
                        address: 'test wrong fotmat'
                    }
                ]
            };
            expect(() => {
                validateNewUser(testUser);
            }).toThrow();
        });

    });
}

// const add = (a, b) => {
//     if(typeof b !== 'number') {
//         return a+a;
//     }
//     return a+b;
// };

// const square = (a) => a*a;

// describe('add', function () {
//     it('should add two numbers', function () {
//         const res = add(15, 16);
    
//         expect(res).toBe(31);

//         //expect ile aşağıdaki aynı işlevi görür
//         // if (res !== 31) {
//         //     throw new Error('It isnt expected value');
//         // }
//     });
    
//     it('should double a single number', function () {
//         const res = add(44);

//         expect(res).toBe(88);
    
//         // if (res !== 88) {
//         //     throw new Error ('It isnt doubled');
//         // }
//     });
// });

// describe('square', function () {
//     it('should square a number', function() {
//         const res = square(10);
    
//         expect(res).toBe(100);

//         // if(res !== 100) {
//         //     throw new Error ('It didint squared');
//         // }
//     });
// });
