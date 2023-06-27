import Balance from '../src/Balance.js';

describe('Balance Test', () => {

    describe('Constructor', () => {

        it('should set the initial balance to 0 if no initial balance is provided', () => {
            // Arrange
            const testBalance = new Balance();
            // Act
            const result = testBalance.getBalance();

            // Assert
            expect(result).toBe(0);
        });

        it('should set the initial balance to the provided value', () => {
            const initialBalance = 10;
            const testBalance = new Balance(initialBalance);
            const result = testBalance.getBalance();
            expect(result).toBe(initialBalance);
        });
    });

    describe('Add function', () => {

        it('should add specified amount to the current balance when add is called', () => {
            // Arrange
            const testBalance = new Balance();
            const amountToAdd = 1000;

            // Act
            testBalance.add(amountToAdd);
            const result = testBalance.getBalance();

            // Assert
            expect(result).toBe(amountToAdd);
        });

        it('should throw an error when trying to add a non-positive amount', () => {
            const testBalance = new Balance();
            const amountToAdd = -10; // or NaN, null, undefined
            expect(() => { testBalance.add(amountToAdd) }).toThrow(new Error('Deposit must be a positive amount!'));
        });

    });

});