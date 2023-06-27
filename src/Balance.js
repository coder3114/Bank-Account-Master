class Balance {

    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    };

    add(amountToAdd) {
        if (amountToAdd <= 0 || isNaN(amountToAdd) || amountToAdd === null) {
            throw new Error('Deposit must be a positive amount!');
        } else {
            this.#balance += amountToAdd;
        }

    };

    withdraw(amountToWithdraw) {
        if (amountToWithdraw > this.#balance) {
            alert('Not enough balance!');
        } else if (isNaN(amountToWithdraw) || amountToWithdraw === null) {
            throw new Error('Withdrawal must be a positive amount!');
        } else {
            this.#balance -= amountToWithdraw;
        }
    };

    getBalance() {
        return this.#balance;
    };
}

export default Balance;