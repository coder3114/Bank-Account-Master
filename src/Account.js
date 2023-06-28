class Account {

    #accountBalance;
    #txnHistory = [];

    constructor(balance) {
        this.#accountBalance = balance;
    };

    credit(transaction) {
        const credit = transaction.getDepositAmount();
        this.#accountBalance.add(credit);
        const tempTransaction = [transaction.getDate(), credit, '', this.#accountBalance.getBalance()];
        this.#txnHistory.push(tempTransaction);
    };

    debit(transaction) {
        const debit = transaction.getWithdrawAmount();
        this.#accountBalance.withdraw(debit);
        const tempTransaction = [transaction.getDate(), '', debit, this.#accountBalance.getBalance()];
        this.#txnHistory.push(tempTransaction);
    };

    getBalance() {
        return this.#accountBalance.getBalance();
    };

    getTransactions() {
        return this.#txnHistory;
    }

};

export default Account;