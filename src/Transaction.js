class Transaction {

    #date
    #depositAmount
    #withdrawAmount

    constructor(date, depositAmount, withdrawAmount) {
        this.#date = date;
        this.#depositAmount = depositAmount;
        this.#withdrawAmount = withdrawAmount;
    };

    //if (!isNaN(Date.parse(this.#date)) || isNaN(this.#date.getTimne()) || Object.prototype.toString.call(this.#date) != "[object Date]" || isNaN(this.#date)
    getDate() {
        if (!this.#date || this.#date === null) {
            throw new Error("Must provide a valid date!");
        } else {
            return this.#date;
        }
    };

    getDepositAmount() {
        let amount = parseFloat(this.#depositAmount);
        return amount;
    };

    getWithdrawAmount() {
        return this.#withdrawAmount;
    };

};

export default Transaction;