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
});