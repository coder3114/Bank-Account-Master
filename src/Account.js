class Account {

    #accountBalance;
    #txnHistory = [];

    constructor(balance) {
        this.#accountBalance = balance;
    };

    credit(transaction) {
        const credit = transaction.getDepositAmount();
    };
};

export default Account;