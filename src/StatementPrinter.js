class StatementPrinter {


    static printHeader() {
        const headerRow = 'date       || credit  || debit  || balance';
        return headerRow;
    };

    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

}

export default StatementPrinter;