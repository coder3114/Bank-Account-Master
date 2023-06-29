import Balance from "../src/Balance.js";
import StatementPrinter from "../src/StatementPrinter.js"

describe('Statement printer test', () => {
    let clgSpy;
    beforeEach(() => {
        clgSpy = spyOn(console, "log");
    });

    afterEach(() => {
        // Restore the original behavior of console.log
        clgSpy.and.callThrough();
    });

    describe('Print formatted statement elements', () => {

        it('should print date in DD/MM/YYYY', () => {
            const result = StatementPrinter.formatDate('2012-01-10');
            expect(result).toBe('10/01/2012');
        });

        it('should print credit amount in 2 decimal points', () => {
            const result = StatementPrinter.formatCredit(1000);
            expect(result.trim()).toBe('1000.00');
        });

        it('should print debit amount in 2 decimal points', () => {
            const result = StatementPrinter.formatCredit(500);
            expect(result.trim()).toBe('500.00');
        });

        it('should print balance amount in 2 decimal points', () => {
            const result = StatementPrinter.formatBalance(2500);
            expect(result.trim()).toBe('2500.00');
        });
    });

    describe('Print', () => {

        it('should print the header row as expected', () => {
            StatementPrinter.printHeader();
            expect(clgSpy).toHaveBeenCalledWith('date       || credit  || debit  || balance');
        });

        it('should print a transaction in specific format as required', () => {
            // Arrange
            const transactionData = ['2012-01-10', 2000, null, 3000];
            // Act
            StatementPrinter.printRow(transactionData);
            // Assert
            expect(clgSpy).toHaveBeenCalledWith('10/01/2012 || \x1b[32m2000.00 \x1b[0m|| \x1b[31m       \x1b[0m|| \x1b[32m3000.00\x1b[0m');
        });
    });

    describe('Console logging', () => {

        const txnHistory = [['2012-01-10', 1000, null, 1000], ['2012-01-13', 2000, null, 3000], ['2012-01-14', null, 500, 2500]];
        const formatTxnHistory = ["date       || credit  || debit  || balance", "14/01/2012 ||         || \x1b[31m500.00\x1b[0m || 2500.00", "13/01/2012 || \x1b[32m2000.00\x1b[0m ||        || 3000.00", "10/01/2012 || \x1b[32m1000.00\x1b[0m ||        || 1000.00"];

        it('should call console.log one more time than length of the array of transaction history is (due to header print)', () => {
            StatementPrinter.print(txnHistory);
            expect(clgSpy).toHaveBeenCalledTimes(txnHistory.length + 1);
        });

        it('should call console.log with the correct arguments', () => {
            StatementPrinter.print(txnHistory);
            for (let i = 0; i < txnHistory.length; i++) {
                expect(clgSpy).toHaveBeenCalledWith(formatTxnHistory[i]);
                return;
            };
        });
    });

    describe('Extended criteria', () => {

        it('should print credit values in green', () => {
            // Arrange
            const transactionData = ['2012-01-13', 1000, null, 3000];
            const credit = transactionData[1];
            const greenCredit = `\x1b[32m${credit.toFixed(2)} \x1b[0m`;
            // Act
            StatementPrinter.printRow(transactionData);
            // Assert
            expect(clgSpy).toHaveBeenCalledWith(`13/01/2012 || ${greenCredit}|| \x1b[31m       \x1b[0m|| \x1b[32m3000.00\x1b[0m`);
        });

        it('should print debit values in red', () => {
            // Arrange
            const transactionData = ['2012-01-14', null, 500, 2500];
            const debit = transactionData[2];
            const redDebit = `\x1b[31m${debit.toFixed(2)} \x1b[0m`;
            // Act
            StatementPrinter.printRow(transactionData);
            // Assert
            expect(clgSpy).toHaveBeenCalledWith(`14/01/2012 || \x1b[32m        \x1b[0m|| ${redDebit}|| \x1b[32m2500.00\x1b[0m`);
        });

        it('should print balance in GREEN if positive and RED if negative', () => {
            // Arrange
            const transactionData = ['2012-01-14', null, 500, 2500];
            const balance = transactionData[3];
            const greenBalance = `\x1b[32m${balance.toFixed(2)}\x1b[0m`;
            // Act
            StatementPrinter.printRow(transactionData);
            // Assert
            expect(clgSpy).toHaveBeenCalledWith(`14/01/2012 || \x1b[32m        \x1b[0m|| \x1b[31m500.00 \x1b[0m|| ${greenBalance}`);
        });
    });
});