class StatementPrinter {


    static printerHeader() {
        const headerRow = 'date       || credit  || debit  || balance';
        console.log(headerRow);
        return headerRow;
    };


}

export default StatementPrinter;