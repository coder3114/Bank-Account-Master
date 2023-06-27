import Transaction from "../src/Transaction.js";

describe('Transaction', () => {
    it('should create a transaction object with the provided date, deposit amount, and withdrawal amount', () => {
        const date = new Date('14/01/2012');
        const depositAmount = 1000;
        const withdrawalAmount = 500;

        const transaction = new Transaction(date, depositAmount, withdrawalAmount);

        expect(transaction.getDate()).toEqual(date);
        expect(transaction.getDepositAmount()).toEqual(depositAmount);
        expect(transaction.getWithdrawAmount()).toEqual(withdrawalAmount);
    });
});