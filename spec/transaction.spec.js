import Transaction from "../src/Transaction.js";

describe('Transaction', () => {

    describe('Constructor', () => {
        it('should create a transaction object with the provided date, deposit amount, and withdrawal amount', () => {
            const date = new Date(); // cannot be 14/01/2012, because in js the Date constructor expects the date string to be in ISO 8601 format (e.g., 'YYYY-MM-DD').
            const depositAmount = 1000;
            const withdrawalAmount = 500;

            const transaction = new Transaction(date, depositAmount, withdrawalAmount);

            expect(transaction.getDate()).toEqual(date);
            expect(transaction.getDepositAmount()).toEqual(depositAmount);
            expect(transaction.getWithdrawAmount()).toEqual(withdrawalAmount);
        });
    })

    describe('Transaction date input', () => {
        it('should throw an error if date is not provided', () => {

            const transaction = new Transaction('', 1000, '');

            expect(() => { transaction.getDate() }).toThrow(new Error("Must provide a valid date!"));
        });

        it('should throw an error if date is not a valid date', () => {

            const dateTest = new Date('rguiwtyhg');
            const transaction = new Transaction(dateTest, 1000, '');

            expect(() => { transaction.getDate() }).toThrow(new Error("Must provide a valid date!"));
        });

        it('should throw an error if date is not YYYY-MM-DD type', () => { //decided to force date format into standard instead to split day month year and check if isNAN

            const dateTest = '14/01/2012';
            const transaction = new Transaction(dateTest, 1000, '');

            //console.log(Date.parse(dateTest)); return NaN
            expect(() => { transaction.getDate() }).toThrow(new Error("Must provide a valid date!"));
        })
    })


});