describe('Statement printer test', () => {

    let statementPrinter;

    beforeEach(() => {
        statementPrinter = new StatementPrinter();
    });

    it('should print the header row as expected', () => {

        const result = StatementPrinter.printerHeader();
        expect(result).toBe('date       || credit  || debit  || balance');
    });
});