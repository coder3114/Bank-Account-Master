class StatementPrinter {


    static printHeader() {
        const headerRow = 'date       || credit  || debit  || balance';
        return headerRow;
    };

    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    static formatCredit(credit) {
        const roundedCredit = credit != null ? parseFloat(credit).toFixed(2) : '';
        return roundedCredit;
    };

    static formatDebit(debit) {
        const roundedDebit = debit != null ? parseFloat(debit).toFixed(2) : '';
        return roundedDebit;
    };

    static formatBalance(balance) {
        const roundBalance = balance.toFixed(2);
        return roundBalance;
    }
}

export default StatementPrinter;