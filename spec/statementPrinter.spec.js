import StatementPrinter from "../src/StatementPrinter.js"

describe('Statement printer test', () => {

    let statementPrinter;

    beforeEach(() => {
        statementPrinter = new StatementPrinter();
    });

    it('should print the header row as expected', () => {
        const result = StatementPrinter.printHeader();
        expect(result).toBe('date       || credit  || debit  || balance');
    });

    it('should print date in DD/MM/YYYY', () => {
        const result = StatementPrinter.formatDate('2012-01-10');
        expect(result).toBe('10/01/2012');
    })
});