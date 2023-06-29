class StatementPrinter {

    static printHeader() {
        const headerRow = 'date       || credit  || debit  || balance';
        console.log(headerRow);
    };

    static formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    static formatCredit(credit) {
        const roundedCredit = credit != null ? parseFloat(credit).toFixed(2) : '';
        const paddedCredit = roundedCredit.padEnd(7);
        return paddedCredit;
    };

    static formatDebit(debit) {
        const roundedDebit = debit != null ? parseFloat(debit).toFixed(2) : '';
        const paddedDebit = roundedDebit.padEnd(6);
        return paddedDebit;
    };

    static formatBalance(balance) {
        const roundBalance = balance.toFixed(2);
        return roundBalance;
    };

    static printRow(transaction) {
        const date = this.formatDate(transaction[0]);
        const credit = this.formatCredit(transaction[1]);
        const debit = this.formatDebit(transaction[2]);
        const balance = this.formatBalance(transaction[3]);
        console.log(`${date} || \x1b[32m${credit}\x1b[0m || \x1b[31m${debit}\x1b[0m || ${balance}`);
    };

    static print(txnHistory) {
        this.printHeader();
        for (let i = txnHistory.length - 1; i >= 0; i--) {
            this.printRow(txnHistory[i]);
        };
    };
};

export default StatementPrinter;