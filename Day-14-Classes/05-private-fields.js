// Activity 5: Private Fields (Optional)

// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        this.logBalance();
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log("Insufficient Balance.");
        }
        this.logBalance();
    }

    logBalance() {
        console.log(`Your current balance is: ${this.#balance}`);
    }
}

// • Task 1O: Create an instance of the Account class and test the deposit and withdraw methods, logging the after each operation.

const account = new Account(100000);

account.logBalance();
account.deposit(5000);
account.withdraw(50000);
