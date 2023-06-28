import Account from "../src/Account.js";

describe('Account Test', () => {

    let mockBalance;
    let mockTransaction;
    let testAccount;

    beforeEach(() => {
        mockTransaction = {
            getDate: () => { },
            getDepositAmount: () => { },
            getWithdrawAmount: () => { }
        };

        mockBalance = {
            getBalance: () => { },
            add: () => { },
            withdraw: () => { }
        }

        testAccount = new Account(mockBalance);
    });

    describe('Credit function', () => {

        it('should call Transaction getDepositAmount when crediting the account with the transaction data', () => {
            // Arrange
            const mockTransactionSpy = spyOn(mockTransaction, `getDepositAmount`)
            // Act
            testAccount.credit(mockTransaction);
            // Assert
            expect(mockTransactionSpy).toHaveBeenCalled();
        });

        it('should call Balance\'s add method', () => {

            const mockBalanceSpy = spyOn(mockBalance, `add`)

            testAccount.credit(mockTransaction);

            expect(mockBalanceSpy).toHaveBeenCalled();
        })

        it('should call Balance\'s getBalance method', () => {

            const mockBalanceSpy = spyOn(mockBalance, `getBalance`)

            testAccount.credit(mockTransaction);

            expect(mockBalanceSpy).toHaveBeenCalled();
        })

        it('should call Transaction getDate when crediting the account', () => {
            // Arrange
            const mockTransactionSpy = spyOn(mockTransaction, `getDate`)
            // Act
            testAccount.credit(mockTransaction);
            // Assert
            expect(mockTransactionSpy).toHaveBeenCalled();
        });
    });
});