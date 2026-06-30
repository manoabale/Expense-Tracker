const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const list = document.getElementById("expense-list");
const totalEl = document.getElementById("total");

let expenses = [];

function renderExpenses() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((exp) => {
    total += exp.amount;
    const li = document.createElement("li");
    li.textContent = `${exp.title} - £${exp.amount.toFixed(2)}`;
    list.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  if (!title || isNaN(amount)) return;

  expenses.push({ id: Date.now(), title, amount });
  titleInput.value = "";
  amountInput.value = "";
  renderExpenses();
});

renderExpenses();
