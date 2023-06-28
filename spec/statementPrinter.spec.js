import StatementPrinter from "../src/StatementPrinter.js"

describe('Statement printer test', () => {

    describe('Print formatted statement elements', () => {

        it('should print the header row as expected', () => {
            const result = StatementPrinter.printHeader();
            expect(result).toBe('date       || credit  || debit  || balance');
        });

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

    describe('Print formatted transaction', () => {

        it('should print a transaction in specific format as required', () => {
            // Arrange
            let clgSpy = spyOn(console, "log");
            const transactionData = ['2012-01-10', 2000, null, 3000];
            // Act
            const result = StatementPrinter.printRow(transactionData);
            // Assert
            expect(clgSpy).toHaveBeenCalledWith('10/01/2012 || 2000.00 ||        || 3000.00');
        });
    });

    describe('Console logging', () => {
        let clgSpy;
        const txnHistory = [['2012-01-10', 1000, null, 1000], ['2012-01-13', 2000, null, 3000], ['2012-01-14', null, 500, 2500]];

        beforeEach(() => {
            clgSpy = spyOn(console, "log");
        });

        it('should call console.log the number of times the length of the array of transaction history is', () => {
            StatementPrinter.print(txnHistory);
            expect(clgSpy).toHaveBeenCalledTimes(txnHistory.length);
        });

        it('should call console.log with the correct arguments', () => {
            StatementPrinter.print(txnHistory);
            const formatTxnHistory = ['10/01/2012 || 1000.00 ||        || 1000.00', '13/01/2012 || 2000.00 ||        || 3000.00', '14/01/2012 ||         || 500.00 || 2500.00'];
            for (let i = 0; i < formatTxnHistory.length; i++) {
                expect(clgSpy).toHaveBeenCalledWith(formatTxnHistory[i]);
            };
        });
    });
});