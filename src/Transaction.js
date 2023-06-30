class Transaction {

    #date
    #depositAmount
    #withdrawAmount

    constructor(date, depositAmount, withdrawAmount) {
        this.#date = date;
        this.#depositAmount = depositAmount;
        this.#withdrawAmount = withdrawAmount;
    };

    getDate() {
        if (!this.#date || this.#date === null || isNaN(Date.parse(this.#date))) throw new Error("Must provide a valid date!");

        return this.#date;
    };

    getDepositAmount() {
        return parseFloat(this.#depositAmount);
    };

    getWithdrawAmount() {
        return this.#withdrawAmount;
    };

};

export default Transaction;