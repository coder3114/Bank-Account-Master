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

    getBalance() {
        return this.#balance;
    };
}

export default Balance;