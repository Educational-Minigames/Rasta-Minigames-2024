document.addEventListener("DOMContentLoaded", function() {
    const buyerTab = document.getElementById("buyer-tab");
    const sellerTab = document.getElementById("seller-tab");
    const reportTab = document.getElementById("report-tab");
    const buyerPage = document.getElementById("buyer-page");
    const sellerPage = document.getElementById("seller-page");
    const reportPage = document.getElementById("report-page");

    buyerTab.addEventListener("click", function() {
        switchTab(buyerTab, buyerPage);
    });

    sellerTab.addEventListener("click", function() {
        switchTab(sellerTab, sellerPage);
    });

    reportTab.addEventListener("click", function() {
        switchTab(reportTab, reportPage);
    });

    function switchTab(activeTab, activePage) {
        document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
        document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
        activeTab.classList.add("active");
        activePage.classList.add("active");
    }

    document.getElementById("buy-button").addEventListener("click", function() {
        const price = Number(document.getElementById('buy-price').value);
        const quantity = Number(document.getElementById('buy-quantity').value);
        const totalCost = price * quantity;
        const remainingBudget = Number(document.getElementById('remaining-budget').value);

        if (totalCost > remainingBudget) {
            alert("بودجه کافی نیست");
            return;
        }

        addReportEntry(quantity, 'خرید', price);
        updateBudget(totalCost, 'subtract');
    });

    document.getElementById("sell-button").addEventListener("click", function() {
        const price = Number(document.getElementById('sell-price').value);
        const quantity = Number(document.getElementById('sell-quantity').value);
        addReportEntry(quantity, 'فروش', price);
        updateBudget(price * quantity, 'add');
    });
});

function addReportEntry(quantity, type, price) {
    const reportBody = document.getElementById("report-body");
    const row = document.createElement("tr");
    if (type === 'خرید') {
        row.innerHTML = `<td>${quantity}</td><td>${quantity}</td><td style="color: blue;">${price}</td><td></td><td></td><td></td>`;
    } else {
        row.innerHTML = `<td></td><td></td><td></td><td>${quantity}</td><td>${quantity}</td><td style="color: red;">${price}</td>`;
    }
    reportBody.appendChild(row);
}

function calculateTotal(type) {
    let price, quantity, total;
    if (type === 'buy') {
        price = Number(document.getElementById('buy-price').value);
        quantity = Number(document.getElementById('buy-quantity').value);
        total = document.getElementById('buy-total');
    } else {
        price = Number(document.getElementById('sell-price').value);
        quantity = Number(document.getElementById('sell-quantity').value);
        total = document.getElementById('sell-total');
    }
    total.value = price * quantity;
}

function updateBudget(amount, operation) {
    const budgetInput = document.getElementById('budget');
    const remainingBudgetInput = document.getElementById('remaining-budget');
    let remainingBudget = Number(remainingBudgetInput.value);

    if (operation === 'subtract') {
        remainingBudget -= amount;
    } else if (operation === 'add') {
        remainingBudget += amount;
    }

    if (remainingBudget < 0) {
        remainingBudget = 0; // جلوگیری از مقدار منفی
    }

    remainingBudgetInput.value = remainingBudget;
}
