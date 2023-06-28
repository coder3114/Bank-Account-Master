import Account from './Account.js';
import Balance from './Balance.js';
import Statement from './StatementPrinter.js';
import Transaction from './Transaction.js';

// Open an account
const acct1 = new Account(new Balance(0));

// Performing transactions using credit or debit methods of Account class with the date and amount
acct1.credit(new Transaction('2012-01-10', 1000, null));
acct1.credit(new Transaction('2012-01-13', 2000, null));
acct1.debit(new Transaction('2012-01-14', null, 500));

// Print the statement
Statement.print(acct1.getTransactions());