# Bank Challenge

## Project Description
The application helps bank customers manage their bank account and transactions effectively. It allows bank clients to manage their account balance, perform transactions, and obtain a printed bank statement with relevant details.

## Features
- Record deposits and withdrawals with specific dates.
- Print bank statements showing transaction history, credits, debits, and balances.

Fpr example,

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see
Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

## User Stories 
1. As a bank client, I want to add an initial balance to my account, so that I can add or withdraw money from the account balance.
2. As a bank client, I want to make deposits on a specific date so that I can increase my account balance.
3. As a bank client, I want to make withdrawals on a specific date so that I can decrease my account balance.
4. As a bank client, I want to retrieve my current account balance and transaction, so I can keep track of the transactions.
5. As a bank client, I want to print my bank statement with title `date       || credit  || debit  || balance`.
6. As a bank client, I want my bank statement for each transaction in reverse chronological order, so I can have a complete review on my transaction history.
7. As a bank client, I want the credited values to be displayed in green and debited values in red, so I can identify them easily.
8. As a bank client, I want the balance to be displayed in green if positive and red if negative, so I can identify them easily.

## Domain Models
The application is structured using the following domain models:
| **Object**       | **Properties**                      | **Messages**                                                  | **Output**                                |
| ---------------- | ----------------------------------- | ------------------------------------------------------------- | ----------------------------------------- |
| Balance          | initialBalance (default value: 0)   | Constructor: Balance(initialBalance)                          |                                           |
|                  |                                     | add(amountToAdd)                                              | balance @number                           |
|                  |                                     | withdraw(amountToWithdraw)                                    | balance @number                           |
|                  |                                     | getBalance()                                                  | balance @number                           |
| Transaction      | date, depositAmount, withdrawAmount | Constructor: Transaction(date, depositAmount, withdrawAmount) |                                           |
|                  |                                     | getDate()                                                     | date @Date                                |
|                  |                                     | getDepositAmount()                                            | amount @number                            |
|                  |                                     | getWithdrawAmount()                                           | amount @number                            |
| Account          | balance, transactions               | Constructor: Account(balance)                                 |                                           |
|                  |                                     | credit(transaction)                                           |                                           |
|                  |                                     | debit(transaction)                                            |                                           |
|                  |                                     | getBalance()                                                  | balance @number                           |
|                  |                                     | getTransactions()                                             | txnHistory @Array                         |
| StatementPrinter |                                     | printStatement(transactions)                                  | formatted statement as required           |
