class ExpenseTracker {
  constructor() {
    this.balance = document.getElementById("balance");
    this.money_plus = document.getElementById("money-plus");
    this.money_minus = document.getElementById("money-minus");
    this.list = document.getElementById("list");
    this.form = document.getElementById("form");
    this.text = document.getElementById("text");
    this.amount = document.getElementById("amount");
    this.transactionTypeInputs = document.getElementsByName("transactionType");
    this.transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Uncomment to initialize
    // this.init();

    // Uncomment to add event listener
    // this.form.addEventListener("submit", this.addTransaction.bind(this));
  }

  // Step 1: Only keep addTransaction active, comment others

  addTransaction(e) {
    e.preventDefault();

    if (this.text.value.trim() === "" || this.amount.value.trim() === "") {
      alert("Please enter text and amount");
      return;
    }

    let amt = Math.abs(+this.amount.value);
    const type = this.getSelectedTransactionType();
    if (type === "expense") amt = -amt;

    const transaction = {
      id: Date.now(),
      text: this.text.value,
      amount: amt,
    };


    // Add your code here to add transaction to the list
  }

  // Step 2: Uncomment this to add transaction to DOM
  /*
  addTransactionDOM(transaction) {
    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML = `Write your code here, this is an example!   `;
    this.list.appendChild(item);
  }
  */

  // Step 3: Uncomment to update values
  /*
  updateValues() {
    const amounts = this.transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    // write your code here, this is an example!
    // update the balance, money_plus, and money_minus elements
  }
  */

  // Step 4: Uncomment to get selected transaction type
  /*
  getSelectedTransactionType() {
    for (const input of this.transactionTypeInputs) {
      if (input.checked) return input.value;
    }
    return "expense"; // default
  }
  */

  // Step 5: Uncomment to remove transaction
  /*
  removeTransaction(id) {
    //write your code here, this is an example!
   
  }
  */

  // Step 6: Uncomment to update local storage
  /*
  updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(this.transactions));
  }
  */

  // Step 7: Uncomment to initialize
  /*
  init() {
    this.list.innerHTML = "";
    this.transactions.forEach(this.addTransactionDOM.bind(this));
    this.updateValues();
  }
  */
}

// Usage example:
// const tracker = new ExpenseTracker();
//
