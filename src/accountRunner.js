import Account from './Account.js';
import Balance from './Balance.js';
import StatementPrinter from './StatementPrinter.js';
import Transaction from './Transaction.js';

// Open an account with your initial balance
const acct1 = new Account(new Balance(0));

// Make your transaction with the date, credit amount (if any), any debit/withdraw amount (if any)
// makes a deposit of 1000 on 10-01-2012
const txn1 = new Transaction('2012-01-10', 1000, null)
// make a deposit of 2000 on 13-01-2012
const txn2 = new Transaction('2012-01-13', 2000, null)
// make a withdrawal of 500 on 14-01-2012 
const txn3 = new Transaction('2012-01-14', null, 500)

// Performing transactions using credit or debit methods of Account class
// make a deposit/credit transaction on acct1
acct1.credit(txn1);
// make a deposit/credit transaction on acct1
acct1.credit(txn2);
// make a withdrawal/debit transaction on acct1
acct1.debit(txn3);

// Print the statement
StatementPrinter.print(acct1.getTransactions());