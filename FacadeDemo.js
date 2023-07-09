class Account {
  constructor(accountNumber, holdersName, balance) {
    this.accountNumber = accountNumber;
    this.holdersName = holdersName;
    this.balance = balance;
  }
}

class Bank {
  accounts = [];

  constructor(account) {
    this.accounts.push(new Account(101, "Mukesh Ambani", 100_000_000));
    this.accounts.push(new Account(102, "Gautam Adani", 200_000_000));
    this.accounts.push(new Account(103, "Anil Ambani", 100_000));
  }

  getAccount(name) {
    const searchName = name.trim().toLowerCase();
    const found = this.accounts.find(account => account.holdersName.trim().toLowerCase() === searchName);
    return found;
  }
}

class Rating {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class CreditRating {
  ratings = []

  constructor() {
    this.ratings.push(new Rating("Mukesh Ambani", 900));
    this.ratings.push(new Rating("Gautam Adani", 750));
    this.ratings.push(new Rating("Anil Ambani", 250));
  }

  eligibleForLoan(name) {
    const searchName = name.trim().toLowerCase();
    const person = this.ratings.find(obj => obj.name.trim().toLowerCase() === searchName);
    if (person)
      return person.rating >= 650;
    return false;
  }
}

class LoanHistory {
  constructor(name, loanAmount, paid) {
    this.name = name;
    this.loanAmount = loanAmount;
    this.paid = paid;
  }
}

class CreditHistory {
  history = [];
  constructor() {
    this.history.push(new LoanHistory("Mukesh Ambani", 100_000, "paid"));
    this.history.push(new LoanHistory("Mukesh Ambani", 500_000, "ongoing"));
    this.history.push(new LoanHistory("Gautam Ambani", 10_000_000, "ongoing"));
    this.history.push(new LoanHistory("Gautam Ambani", 15_000_000, "ongoing"));
    this.history.push(new LoanHistory("Gautam Ambani", 2_000_000, "paid"));
    this.history.push(new LoanHistory("Anil Ambani", 5_000_000, "paid"));
    this.history.push(new LoanHistory("Anil Ambani", 10_000_000, "defaulted"));
  }

  hasDefaulted(name) {
    const searchName = name.trim().toLowerCase();
    const result = this.history.find(history =>
      history.name.trim().toLowerCase() === searchName &&
      history.paid.trim().toLowerCase() === "defaulted");

    return result == null;
  }
}

class LoanSystem {
  name;
  amount;
  
  bank = new Bank();
  rating = new CreditRating();
  history = new CreditHistory();
  approved = true;

  isBankEligible = function() {
        return !bank.getAccount(name);
  }

  hasGoodRating = function() {
    return rating.eligibleForLoan(this.name);
  }

  isDefaulter = function() {
    return history.hasDefaulted(name);
  }

  hasColatral = function() {
    return bank.getAccount(name).balance < amount / 10
  }
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  applyForLoan() {
    let approved = true;
    for (validation in [this.isBankEligible, this.hasGoodRating, this.isDefaulter, this.hasColatral]) {
        approved = validation();
        if (!approved) return;
    }
    console.log(`Loan of amount ${amount} of ${name} has${approved ? " " : " not "}been approved`);

  }
}



