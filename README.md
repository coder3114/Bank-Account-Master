# 🏧 **Bank Account Master** 🏧

## 💹 **Project Description**
The application helps bank customers manage their bank account and transactions effectively. It allows bank clients to manage their account balance, perform transactions, and obtain a printed bank statement with relevant details.

## ✅ **Features**
- Record deposits and withdrawals with specific dates.
- Print bank statements showing transaction history, credits, debits, and balances.
- Credited values are in GREEN and debited values are in RED.
- Balance values are in GREEN if positive and RED if negative.

    For example,
  
    **Given** a client makes a deposit of 1000 on 10-01-2012  
    **And** a deposit of 2000 on 13-01-2012  
    **And** a withdrawal of 500 on 14-01-2012  
    **When** she prints her bank statement  
    **Then** she would see
    
    
    ![templateResult](https://github.com/coder3114/bank-challenge/assets/123841437/e765d6d3-cf6c-4815-848b-eba45e71aa22)

## 💻 **How the application was created**

1.  The APP was developed using an **Object-Oriented Design** approach. I tried to follow the **SOLID Principles** for the design and organization of classes. Following are the user stories and domain models.

### **User Stories**
```
1. As a bank client, I want to add an initial balance to my account, so that I can add or withdraw money from the account balance.
2. As a bank client, I want to make deposits on a specific date so that I can increase my account balance.
3. As a bank client, I want to make withdrawals on a specific date so that I can decrease my account balance.
4. As a bank client, I want to retrieve my current account balance and transaction, so I can keep track of the transactions.
5. As a bank client, I want to print my bank statement with title `date       || credit  || debit  || balance`.
6. As a bank client, I want my bank statement for each transaction in reverse chronological order, so I can have a complete review on my transaction history.
7. As a bank client, I want the credited values to be displayed in green and debited values in red, so I can identify them easily.
8. As a bank client, I want the balance to be displayed in green if positive and red if negative, so I can identify them easily.
```
### **Domain Models**
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

2. I used **encapsulation** to (1) encapsulate adding and storing Transactions in a Balance class; (2) encapsulate Statement formatting in a StatementPrinter class; (3) encapsulate Transaction data in a Transaction class; (4) encapsulate account management in an Account class.

3. I practiced **Test-Driven Development (TDD)** by (1) writing unit tests to verify the behavior of individual classes and components are performed as expected and commit to GitHub; (2) writing production code and refactoring code iteratively and commit to GitHub.

## ▶️ **Getting started**

To get started with the Bank Account Master application, please follow the instructionsto set up the application locally.
1. Fork and clone this repository to your local machine:
      ```bash
      git clone https://github.com/coder3114/bank-challenge
2. Navigate to the project directory:
      ```bash
      cd my-bankAccountManager-app
3. Install the dependencies using npm:
      ```bash
      npm install
      
## 🔢 **Usage**


1. Start the application by running the following command. This command will start the execution of the application using the accountRunner.js file as the entry point.
      ```bash
      node accountRunner.js
2. Interact with the application by customizing the following account management features:
  

   **Open Account**: Opening an account with your initial balance. Balance can be 0, or a positive number, or empty (it will provide 0 by default).
       
      ![image](https://github.com/coder3114/bank-challenge/assets/123841437/7b3479fe-aa42-47e9-bf4a-54870972bb53)
    
    **Make transaction**: Making your transaction with the date, credit amount (if any), any debit/withdraw amount (if any). 
      ⚠️ [**Attention**] Please input date in **YYYY-MM-DD** format. Credit and debit amounts must be valid positive amount, or zero.
    
      ![image](https://github.com/coder3114/bank-challenge/assets/123841437/e2207e06-af0d-4c98-a07d-6ce28a57b9b2)
    
   **Perform transaction**: Performing transactions using credit or debit methods of Account class. Be careful to use credit() to make a deposit/credit transactions; use debit() to make a withdrawal/debit transactions.
    
      ![image](https://github.com/coder3114/bank-challenge/assets/123841437/f2ec4edc-7cd5-4581-9656-69e41c815c2c)
    
   **Print statement**: Calling the StatementPrinter to create a chronological list of transactions, starting from the most recent and going back in time.
    
      ![image](https://github.com/coder3114/bank-challenge/assets/123841437/d950aac8-5573-4042-8e35-2f252a8fe243)
    

## 🤝 **Contributing**


### If you'd like to contribute to Bank Account Master App to make it better, please follow these steps:

1. Fork the repository on GitHub from https://github.com/coder3114/bank-challenge
2. Create a new branch for your feature:
      ```bash
      git checkout -b feature/your-feature
3. Clone this repository to your local machine:
      ```bash
      git clone https://github.com/your-name/bank-challenge
4. Commit your changes:
      ```bash
      git commit -m "Add your commit message"
5. Push the branch to your forked repository:
      ```bash
      git push origin feature/your-feature
6. Open a pull request on the original repository.

## 💟 **Acknowledgments**


Below are the list of resources I find helpful and would like to give credit to:
* [.gitignore setup](https://how-to.dev/how-to-set-up-gitignore-for-your-javascript-project)
* [TypeError [ERR_UNKNOWN_FILE_EXTENSION]](https://stackoverflow.com/questions/61536473/getting-error-typeerror-err-unknown-file-extension-unknown-file-extension)
* [padEnd String Method in JavaScript](https://www.samanthaming.com/tidbits/69-display-string-in-tabular-format-with-padend/)
* [How to round to at most 2 decimal places, if necessary](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary)
* [How to format the date to (dd/mm/yyyy hh:mm:ss)](https://stackoverflow.com/questions/66957467/how-to-format-the-date-to-dd-mm-yyyy-hhmmss)

**Thank you for choosing and utilizing my app! I hope you had a positive experience. If you have any suggestions or questions, please don't hesitate to reach out. I will appreciate your feedback to help improve the app further. I look forward to serving you again in the future.** 😊
