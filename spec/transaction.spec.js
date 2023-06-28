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

    it('should throw an error if date is not provided', () => {

        const transaction = new Transaction('', 1000, '');

        expect(() => { transaction.getDate() }).toThrow(new Error("Must provide a valid date!"));
    });

    it('should throw an error if date is not a valid date', () => {

        const dateTest = 'fgh';
        const transaction = new Transaction(dateTest, 1000, '');

        // console.log(dateTest instanceof Date);
        expect(() => { transaction.getDate() }).toThrow(new Error("Must provide a valid date!"));
    });

});