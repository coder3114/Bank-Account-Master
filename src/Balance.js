class Balance {

    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    };

    getBalance() {
        return this.#balance;
    };
}

export default Balance;