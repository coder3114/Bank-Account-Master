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
        };

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
        });

        it('should call Balance\'s getBalance method', () => {

            const mockBalanceSpy = spyOn(mockBalance, `getBalance`)

            testAccount.credit(mockTransaction);

            expect(mockBalanceSpy).toHaveBeenCalled();
        });

        it('should call Transaction getDate when crediting the account', () => {
            // Arrange
            const mockTransactionSpy = spyOn(mockTransaction, `getDate`)
            // Act
            testAccount.credit(mockTransaction);
            // Assert
            expect(mockTransactionSpy).toHaveBeenCalled();
        });
    });

    describe('getBalance test', () => {

        it('should call Balance\'s getBalance method', () => {

            const mockBalanceSpy = spyOn(mockBalance, `getBalance`)

            testAccount.getBalance();

            expect(mockBalanceSpy).toHaveBeenCalled();
        });
    });

    describe('Debit function', () => {

        it('should call Transaction getWithdrawAmount when debiting the account', () => {
            // Arrange
            const mockTransactionSpy = spyOn(mockTransaction, `getWithdrawAmount`)
            // Act
            testAccount.debit(mockTransaction);
            // Assert
            expect(mockTransactionSpy).toHaveBeenCalled();
        });

        it('should call Balance\'s withdraw method', () => {

            const mockBalanceSpy = spyOn(mockBalance, `withdraw`)

            testAccount.debit(mockTransaction);

            expect(mockBalanceSpy).toHaveBeenCalled();
        });

        it('should call Balance\'s getBalance method', () => {

            const mockBalanceSpy = spyOn(mockBalance, `getBalance`)

            testAccount.credit(mockTransaction);

            expect(mockBalanceSpy).toHaveBeenCalled();
        });

        it('should call Transaction getDate when crediting the account', () => {
            // Arrange
            const mockTransactionSpy = spyOn(mockTransaction, `getDate`)
            // Act
            testAccount.credit(mockTransaction);
            // Assert
            expect(mockTransactionSpy).toHaveBeenCalled();
        });

        // describe('Transaction History', () => {

        //     it('should return record of an exact transaction', () => {

        //         // const transaction1 = ['2012-01-14', 1000, ''];
        //         mockTransaction.getDate() = '2012-01-14';
        //         mockTransaction.getDepositAmount() = 1000;
        //         mockTransaction.getWithdrawAmount() = '';

        //         testAccount.credit(mockTransaction);

        //         console.log(testAccount.getTransactions());
        //         // expect(testAccount.getTransactions()).toEqual(['2012-01-14', 1000, '']);
        //     });
        // });
    });

});